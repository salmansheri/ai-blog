'use client'

import Link from "next/link"; 

import { Post } from "@prisma/client"; 
import Image from "next/image";

type TrendingCardProps = {
    className?: string; 
    trendingPost: Post; 
}

const TrendingCard = ({className, trendingPost}: TrendingCardProps) => {
    return(
        <Link className={`${className} sm:mt-0 sm:h-auto relative hover:opacity-70 mt-7 block w-full h-96 transition`} 
        // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
            href={`/post/${trendingPost?.id}`}
        >
            <div className="z-0 relative w-full h-full ">
                <Image 
                    fill
                    style={{objectFit: 'cover'}}
                    src={trendingPost?.image}
                    alt="postImage"
                    sizes="(max-width: 480px) 100vw,
                            (max-width: 768px) 75vw,
                            (max-width: 1060px) 50vw,
                            33vw
                    
                    "   
                  
                />

            </div>
            <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
            <div className="absolute z-2 bottom-0 left-0 p-3">
                <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
                    {trendingPost?.category}
                </h4>
                <div className="text-wh-100 mt-2">
                    {trendingPost?.title}
                </div>

            </div>
        </Link>
    )
}

interface TrendingProps {
    trendingPosts: Array<Post>; 

}

const Trending = ({
    trendingPosts
}: TrendingProps) => {
    return(
        <section className="pt-3 pb-10">
            <div className="flex items-center gap-3">
                <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
                    trending
                </div>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum molestias perspiciatis laborum, repudiandae quod aut nihil quas, consequatur distinctio aperiam quo tempora, beatae corporis adipisci veniam dicta dignissimos esse!

                </p>
            </div>

            {/* flex option  */}
            {/* <div className="flex justify-between gap-3 my-3">
                <div className="basis-1/2 bg-wh-500 h-96 ">

                </div>
                <div className="flex flex-col gap-3 basis-1/2  h-96 ">
                    <div className="basis-1/2 bg-wh-500"></div>
                    <div className="flex basis-1/2 gap-3   ">
                        <div className="basis-1/2 bg-wh-500"></div>
                        <div className="basis-1/2 bg-wh-500"></div>
                    </div>

                </div>

            </div> */}

            {/* grid option  */}
           <div className="sm:grid gap-5 grid-cols-4  grid-rows-2 sm:h-[600px] my-3">
            <TrendingCard className="col-span-2 row-span-2 bg-wh-500 " trendingPost={trendingPosts[0]} />
            <TrendingCard className="col-span-2 row-span-1 bg-wh-500 " trendingPost={trendingPosts[1]} />           <TrendingCard className="col-span-1 row-span-1 bg-wh-500 " trendingPost={trendingPosts[2]} />
            <TrendingCard className="col-span-1 row-span-1 bg-wh-500 " trendingPost={trendingPosts[3]} />

           </div>
           <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, commodi debitis corrupti temporibus blanditiis quod, illum, optio veniam repellat nostrum quis aut quibusdam facilis necessitatibus cumque quidem ad! Labore, sit.
           </p>

           
        </section>
    )
}

export default Trending; 
