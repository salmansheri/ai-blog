import { prisma } from "@/app/api/client";
import { Post } from '@prisma/client'

export async function getPosts() {
    try {
        const posts: Array<Post> = await prisma.post.findMany();
        
        return posts; 

    } catch(err: any) {
        throw new Error(err);

    }
    


}