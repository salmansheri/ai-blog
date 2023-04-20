"use client";
import Image from "next/image";
import Subscribe from "./home/Subscribe";
import SocialLinks from "./navbar/SocialLinks";
import Ad2 from '/public/assets/ad-2.png'; 
import AboutProfile from '/public/assets/about-profile.jpg'

const Sidebar = () => {
  return (
    <section className="">
      <h4
        className={`bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold `}
      >
        Subscribe & Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          style={{ width: "500px", height: "250px" , objectFit: "cover" }}
          src={Ad2}
          alt="postImage"
          sizes="(max-width: 480px) 100vw,
                            (max-width: 768px) 75vw,
                            (max-width: 1060px) 50vw,
                            33vw
                    
                    "
        />
      </div>

      <h4
        className={`bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold `}
      >
        About the Blog
      </h4>

      <div className="">
      <Image
          
          style={{ width: "500px", height: "250px" , objectFit: "cover" }}
          placeholder="blur"
          src={AboutProfile}
          alt="postImage"
          sizes="(max-width: 480px) 100vw,
                            (max-width: 768px) 75vw,
                            (max-width: 1060px) 50vw,
                            33vw
                    
                    "
        />

      </div>

      <h4 className={` py-3 px-5 text-wh-500  text-center font-bold `}>
        Salman sheriff
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
        doloribus quos itaque, inventore quasi adipisci dolorem officia debitis
        delectus sapiente, vitae qui officiis quibusdam, modi eveniet harum enim
        assumenda eligendi.
      </p>
    </section>
  );
};

export default Sidebar;
