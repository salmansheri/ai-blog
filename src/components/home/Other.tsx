'use client'

import Card from "../Card";
import Header from "../Header";
import { Post } from '@prisma/client'; 

interface OtherProps {
    otherPosts: Array<Post>
}

const Other: React.FC<OtherProps> = ({
    otherPosts,
}) => {
    return(
        <section className='pt-4 mb-16'>
            <Header 
                title="Other"
                desc="Other Trending Posts"
                color="bg-accent-orange"
            />

            <div className="sm:grid grid-cols-2 gap-16">
            <Card
                post={otherPosts[0]}
                className=" mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />
            <Card
                post={otherPosts[1]} 
                className=" mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />
            <Card
                post={otherPosts[2]} 
                className=" mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />
            <Card
                post={otherPosts[3]} 
                className=" mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />

            </div>

        </section>

    )
}

export default Other; 