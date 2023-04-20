import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request, ) {
  try {
    const body = await request.json();

    const { title, role } = body;

    // @ts-ignore
    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Create 4 line blog post with html tags bases on this title: ${title} `,
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assistant"
            }. Write with html tags`,
          },
        ],
      });

      

    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
