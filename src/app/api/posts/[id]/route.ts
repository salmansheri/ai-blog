import { NextResponse } from "next/server";
import { prisma } from "../../client";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(post, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const body = await request.json();

    const { title, content } = body;

    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(post, {
      status: 200,
    });
  } catch (error: any) {
    console.error("request Error", error );
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
