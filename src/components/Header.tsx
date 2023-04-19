'use client'; 

interface HeaderProps {
    title: string; 
    desc: string; 
    color: string; 
}




const Header: React.FC<HeaderProps> = ({
    title,
    desc,
    color
}) => {
    return(
       
      <div
      className="flex items-center gap-3 my-8"
  >
      <h4 className={`${color} py-2 px-5 text-wh-900 text-sm font-bold `}>
          {title}
      </h4>
      <p className="font-bold text-2xl">{desc}</p>
  </div>
       

    )
}

export default Header; 