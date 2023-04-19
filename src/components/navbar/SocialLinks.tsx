import Image from 'next/image'; 
import Twitter from '/public/assets/social_twitter.png'; 
import Facebook from '/public/assets/social_facebook.png'; 
import Instagram from '/public/assets/social_instagram.png'; 
import Google from '/public/assets/social_google.png'; 
import Discord from '/public/assets/social_discord.png'; 
import Link from 'next/link';


interface SocialLinksProps {
    isDark?: boolean; 
}

const SocialLinks: React.FC<SocialLinksProps> = ({
    isDark = false,
}) => {
    return(
        <div className="flex justify-between items-center gap-7">
            <Link href="https://twitter.com"  target="_blank" rel="noreferrer">
                <Image 
                    className={`${isDark ? 'brightness-0' : ""} hover:opacity-50`}
                    src={Twitter}
                    alt="Twitter"
                    width={20}
                    height={20}
                    
                />
            </Link>
            <Link href=""  target="_blank" rel="noreferrer">
                <Image 
                    className={`${isDark ? 'brightness-0' : ""} hover:opacity-50`}
                    src={Facebook}
                    alt="Facebook"
                    width={20}
                    height={20}
                    
                />
            </Link>
            <Link href=""  target="_blank" rel="noreferrer">
                <Image 
                    className={`${isDark ? 'brightness-0' : ""} hover:opacity-50`}
                    src={Instagram}
                    alt="Instagram"
                    width={20}
                    height={20}
                    
                />
            </Link>
            <Link  href="" target="_blank" rel="noreferrer">
                <Image 
                    className={`${isDark ? 'brightness-0' : ""} hover:opacity-50`}
                    src={Discord}
                    alt="Discord"
                    width={20}
                    height={20}
                    
                />
            </Link>
            <Link href=""  target="_blank" rel="noreferrer">
                <Image 
                    className={`${isDark ? 'brightness-0' : ""} hover:opacity-50`}
                    src={Twitter}
                    alt="Twitter"
                    width={20} 
                    height={20}
                    
                />
            </Link>
            <Link href=""  target="_blank" rel="noreferrer">
                <Image 
                    className={`${isDark ? 'brightness-0' : ""} hover:opacity-50`}
                    src={Google}
                    alt="Twitter"
                    width={20}
                    height={20}
                    
                />
            </Link>

        </div>
    )
}

export default SocialLinks; 