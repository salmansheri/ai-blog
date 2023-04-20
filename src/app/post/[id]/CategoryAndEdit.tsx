"use client";
import { FormattedPost } from "@/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Post } from "@prisma/client";
import { Editor } from "@tiptap/react";

interface CategoryAndEditProps {
  post?: FormattedPost;
  isEditable?: boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
}

const CategoryAndEdit: React.FC<CategoryAndEditProps> = ({
  post,
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
}) => {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable); 
    setTempTitle(title); 
    setTempContent(editor?.getHTML() || "")


  }

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable); 
    setTitle(tempTitle)
    editor?.commands.setContent(tempContent); 

  }


  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post?.category}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
