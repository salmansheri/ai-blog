"use client";
import { FormattedPost } from "@/types";
import { useCallback, useState } from "react";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SocialLinks from "@/components/navbar/SocialLinks";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenuBar from "./EditorMenuBar";
import CategoryAndEdit from "./[id]/CategoryAndEdit";
import Article from "./[id]/Article";
import axios from "axios";
import { useRouter } from 'next/navigation'; 
import { toast } from "react-hot-toast";

interface ContentProps {
  post?: FormattedPost;
}

const Content: React.FC<ContentProps> = ({ post }) => {
  const router = useRouter(); 
  const [isEditable, setIsEditable] = useState<boolean>(false);
  // @ts-ignore
  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  // @ts-ignore 
  const [content, setContent] = useState<string>(post?.content);
  const [contentError, setContentError] = useState<string>("");

  const [tempTitle, setTempTitle] = useState<string>(title)
  const [tempContent, setTempContent] = useState<string>(content)
  // @ts-ignore
  const date = new Date(post?.createdAt); 
  const options = {
    year: "numeric",
    month: 'long',
    day:"numeric",
  }
// @ts-ignore
  const formattedDate = date.toLocaleDateString("en-US", options)

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    if(title) setTitleError(""); 

    setTitle(e.target.value)

  }

  const handleIsEditable = useCallback((bool: boolean) => {
    setIsEditable(bool); 
    editor?.setEditable(bool); 

    

  } ,[]); 

  const handleOnChangeContent = useCallback(({ editor }: any) => {
    if(!(editor as Editor).isEmpty) {
      setContentError("")
    }

    setContent((editor as Editor).getHTML())

  }, [])

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class: 
        "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full"
      },
    },
    content: content,
    editable: isEditable,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
       // validation Checks; 
    if(title === "" ) setTitleError("This field is required"); 
    if(editor?.isEmpty) setContentError("This field is required"); 
    if(title==="" || editor?.isEmpty) return; 

    const response = await axios.patch(`/api/posts/${post?.id}`, {
      title: title,
      content: content,
    })

    const data = response.data;
    
    if(data) {
      toast.success("Successfully updated")
      handleIsEditable(false); 
      setTempTitle(""); 
      setTempContent(""); 
  
      setTitle(data.title); 
      setContent(data.content)
      editor?.commands.setContent(data.content); 
      router.refresh(); 
      
    }

   
   
 

    } catch(error) {
      console.error(error)
      toast.error("something went wrong")

    }
   
    
  };

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* BREADCRUMBS  */}
      <h5 className="text-wh-300">
        {`Home > ${post?.category} > ${post?.title}`}
      </h5>
    <CategoryAndEdit 
    post={post} 
    title={title}
    setTitle={setTitle}
    tempTitle={tempTitle}
    setTempTitle={setTempTitle}
    tempContent={tempContent}
    setTempContent={setTempContent}
    isEditable={isEditable} 
    handleIsEditable={handleIsEditable} 
    editor={editor}
     />
      <form onSubmit={handleSubmit}>
        {/* HEADER  */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                value={title}
                onChange={handleOnChangeTitle}
              />
              {titleError && (
                <p className="mt-1 text-primary-500">{titleError}</p>
              )}
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post?.author}</h5>
            <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
          </div>
        </>

        {/* IMAGE  */}
        <div className="relative w-auto mt-2 mb-16 h-[600px]">
          {/* @ts-ignore  */}
          <Image fill alt="postimage" src={post?.image}
            sizes="
                            (max-width: 480px) 100vh,
                            (max-width: 768px) 85vw, 
                            (max-width: 1060px) 75vw,
                            60vw,
                    
                    "
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* ARTICLE  */}

      <Article 
        isEditable={isEditable} 
        editor={editor} 
        contentError={contentError}
        setContent={setContent}
        title={title}
        />


        {/* SAVE  */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      {/* SOCIAL LINK  */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
