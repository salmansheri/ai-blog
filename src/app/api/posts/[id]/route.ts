import { NextResponse } from "next/server"
import { prisma } from "../../client"


interface IParams {
    id?: string
}

export async function GET(
    request: Request, 
    {params}: {params: IParams}

) {
    try{
        const { id } = params; 
        const post = await prisma.post.findUnique({
            where: {
                id,
            }
        })

        return NextResponse.json(post, {
            status: 200
        })

    } catch(error: any) {
        return NextResponse.json({message: error.message}, {
            status: 500
        })

    }
   

}