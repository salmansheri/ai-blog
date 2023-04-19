'use client';
import Subscribe from "./home/Subscribe";
import SocialLinks from "./navbar/SocialLinks";

 

const Sidebar = () => {
    return(
        <section className="">
             <h4 className={`bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold `}>
          Subscribe & Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />

      </div>
      <Subscribe />
      <div className="">
        advert Image

      </div>

      <h4 className={`bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold `}>
          About the Blog
      </h4>
      
      <div className="">Profile Image</div>

      <h4 className={` py-3 px-5 text-wh-500  text-center font-bold `}>
          Salman sheriff 
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloribus quos itaque, inventore quasi adipisci dolorem officia debitis delectus sapiente, vitae qui officiis quibusdam, modi eveniet harum enim assumenda eligendi.
      </p>

        </section>
    )
}

export default Sidebar; 