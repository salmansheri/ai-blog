import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* first column  */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            suscipit quaerat architecto qui pariatur reiciendis asperiores
            minima quia autem. Aliquid neque veritatis enim laudantium, culpa et
            repellendus officiis blanditiis saepe.
          </p>
          <p>©️ Salman's Blog</p>
        </div>
        {/* Second column  */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            sed provident vel sequi 
          </p>
          <p className="my-5">
            sed provident vel sequi 
          </p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* Third column  */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            sed provident vel sequi 
          </p>
          <p className="my-5">
            sed provident vel sequi 
          </p>
          <p>737373733737373</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
