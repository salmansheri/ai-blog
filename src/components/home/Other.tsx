'use client'

import Card from "../Card";
import Header from "../Header";
import { Post } from '@prisma/client'; 

interface OtherProps {
    otherPosts?: Array<Post>
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
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />
            <Card 
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />
            <Card 
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />
            <Card 
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80" 
            
                />

            </div>

        </section>

    )
}

export default Other; 