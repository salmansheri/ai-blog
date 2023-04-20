import Card from "../Card";
import Header from "../Header";
import { Post } from '@prisma/client'; 

interface TechProps {
    techPosts: Array<Post>;
}

const Tech: React.FC<TechProps> = ({
    techPosts
}) => {
    return(
        <section>
            <hr className="border-1" />
            {/* header  */}
           <Header title="HOT" desc="Latest News in Technology" color="bg-accent-orange" />

            {/* flex  */}
            {/* <div className="flex justify-between items-center gap-5">
                <div className="bg-wh-500 h-96 basis-1/2"></div>
                <div className="flex flex-col gap-3  h-96 basis-1/2">
                    <div className="bg-wh-500 basis-1/3">

                    </div>
                    <div className="bg-wh-500 basis-1/3">

                    </div>
                    <div className="bg-wh-500 basis-1/3">

                    </div>
                </div>

            </div> */}

            {/* grid  */}
            <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8  my-5">
                {/* large card  */}
                <Card 
                className="bg-wh-500 col-span-1 row-span-3"
                imageHeight="h-96"
                post={techPosts[0]} 
                isLongForm
                />
                {/* small cards  */}
                <Card 
                className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                imageHeight="h-48" 
                post={techPosts[1]}
                isSmallCard
                />
                <Card 
                className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                imageHeight="h-48" 
                post={techPosts[2]}
                isSmallCard
                />
                <Card 
                className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                imageHeight="h-48" 
                post={techPosts[3]}
                isSmallCard
                />
               


            </div>
        </section>
    )
}

export default Tech; 