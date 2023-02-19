import { socialLinks } from "../lib/socialLinks";

export default function Footer() {
    const socials = 'brightness-100 hover:brightness-150 filter grayscale';

    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex justify-between items-center mx-auto container">
                <div className="flex flex-row gap-x-2 md:gap-x-1">
                    {socialLinks.map(({ image, href, alt }) => (
                        <a href={href} key={href} className={socials} target="_blank" rel="noreferrer">
                            <img className="h-4 w-4" src={image} alt={alt} />
                        </a>
                    ))}
                </div>
                <p className="p-5 ml-auto text-sm text-gray-700"> Open Byte © 2023</p>
            </div>
        </footer>
    )
}