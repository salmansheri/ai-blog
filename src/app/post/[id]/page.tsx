import Sidebar from "@/components/Sidebar";
import { getPost } from "@/libs/posts";
import Content from "../Content";
import { FormattedPost } from "@/types";
import EmptyState from "@/components/EmptyState";



interface IParams {
    id?:string
}

export const revalidate = 60; 


const Post = async ({params}: {params: IParams}) => {
    const {id} = params

    const post: FormattedPost | null = await getPost(id); 
   
    if(!post) {
      return(

        <EmptyState 
          title={`Post  is not found`}
          desc={`Looks like you dont have any post`}
        
        
        />
        ) 
    }
    
    return(
        <div className="px-10 leading-7">
       
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <Content post={post} />
           
           
          </div>
          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
       
    )
}

export default Post