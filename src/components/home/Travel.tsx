"use client";

import Card from "../Card";
import Header from "../Header";
import { Post } from '@prisma/client'

interface TravelProps {
  travelPosts?: Array<Post>
}

const Travel: React.FC<TravelProps> = ({
  travelPosts,
}) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />

      <Header
        title="TRAVEL"
        desc="New Travel Experieces"
        color="bg-accent-green"
      />

      {/* card row  */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 bg-wh-500 mt-5 sm:mt-0"
          imageHeight="h-80"
        
        />
        <Card
          className="basis-1/3 bg-wh-500 mt-5 sm:mt-0"
          imageHeight="h-80"
        
        />
        <Card
          className="basis-1/3 bg-wh-500 mt-5 sm:mt-0"
          imageHeight="h-80"
        
        />
      </div>
      <Card
          className="bg-wh-500 sm:flex justify-between items-center gap-3 mt-7 mb-5"
          imageHeight="h-80"
        
        />
    </section>
  );
};

export default Travel;
