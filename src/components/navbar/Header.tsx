'use client'

const Header = () => {
    return(
        <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">SALMAN'S BLOG...</h1>
          <p className="text-sm mt-3">
            Blog dedicated towards AI and generation and job Automation
          </p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
          Image right here
        </div>
      </div>
    )
    }

export default Header; 