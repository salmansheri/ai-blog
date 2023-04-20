import { getPost } from "@/libs/posts"

interface IParams {
    id?:string
}


const Post = async ({params}: {params: IParams}) => {
    const {id} = params

    const post = await getPost(id); 
    return(
        <div>{post?.content}</div>
    )
}

export default Post