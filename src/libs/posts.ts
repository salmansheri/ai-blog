import { prisma } from "@/app/api/client";
import { Post } from '@prisma/client'

export async function getPosts() {
    try {
        const posts: Array<Post> = await prisma.post.findMany();


        
        
        return posts

    } catch(err: any) {
        throw new Error(err);

    }
    


}

export async function getPost(id: any) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            }
        })

        const formattedPost = {
            ...post, 
            createdAt: post?.createdAt?.toISOString(),
         
        }

        return formattedPost; 
    } catch(error: any) {
        throw new Error(error)
    }

}