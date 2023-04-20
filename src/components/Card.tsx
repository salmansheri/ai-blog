'use client';

import { Post } from "@prisma/client";
import Link from "next/link";

interface CardProps {
    className?: string; 
    imageHeight: string; 
    isSmallCard?:boolean; 
    isLongForm?:boolean; 
    post: Post
}

const Card: React.FC<CardProps> = ({
    className,
    imageHeight,
    isSmallCard = false,
    isLongForm = false,
    post
}) => {
    const { id, title, author, createdAt, image, snippet } = post || {}

   const date = new Date(createdAt); 
   const options = { year: "numeric", month: "long", day: "numeric"} as any; 
   const formattedDate = date.toLocaleDateString("en-US", options); 
 
    return(
        <div className={className}>
            <Link href={`/post/${post?.id}`} className="basis-full hover:opacity-70">
                <div className={`relative w-auto mb-3 ${imageHeight} `}>
                    image

                </div>
            </Link>
            <div className="basis-full">
                <Link href={`/post/${post?.id}`}>
                    <h4 className={`font-bold hover:text-accent-green
                        ${isSmallCard ? "text-base" : "text-lg"}
                        ${isSmallCard ? "line-clamp-2" : ""}
                    `}>
                        {title}
                        
                    </h4>


                </Link>
                <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
                    <h5 className="font-semibold text-xs">{author}</h5>
                    <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
                </div>
                <p className={`text-wh-100 ${isLongForm ? "line-clamp-5" : "line-clamp-3"}`}>
                    {snippet}

                </p>

            </div>
        </div>
    )
    }

export default Card; 