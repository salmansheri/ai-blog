import { prisma } from "../client";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    try {
        const body = await request.json(); 

        const {
            title,
            category,
            content,
            author,
            image,
            snippet,
        } = body; 

        const post = await prisma.post.create({
            data: {
                title,
                category,
                content,
                author,
                image,
                snippet,
                
            }
        })

        return NextResponse.json(post, {
            status: 201
        })
    } catch(err: any) {
        return NextResponse.json({message: err.message}, {
            status: 500
        })

    }


}