'use client';

import Link from "next/link";

interface CardProps {
    className?: string; 
    imageHeight: string; 
    isSmallCard?:boolean; 
    isLongForm?:boolean; 
}

const Card: React.FC<CardProps> = ({
    className,
    imageHeight,
    isSmallCard = false,
    isLongForm = false,
}) => {
    return(
        <div className={className}>
            <Link href="/" className="basis-full hover:opacity-70">
                <div className={`relative w-auto mb-3 ${imageHeight} `}>
                    image

                </div>
            </Link>
            <div className="basis-full">
                <Link href="/">
                    <h4 className={`font-bold hover:text-accent-green
                        ${isSmallCard ? "text-base" : "text-lg"}
                        ${isSmallCard ? "line-clamp-2" : ""}
                    `}>
                        title
                    </h4>


                </Link>
                <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
                    <h5 className="font-semibold text-xs">author</h5>
                    <h6 className="text-wh-300 text-xs">date</h6>
                </div>
                <p className={`text-wh-100 ${isLongForm ? "line-clamp-5" : "line-clamp-3"}`}>
                    snippet

                </p>

            </div>
        </div>
    )
    }

export default Card; 