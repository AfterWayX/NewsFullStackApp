import { socialLinks } from "../lib/socialLinks";

export default function Footer({ isHomePage = false }: { isHomePage?: boolean }) {
    const socials = 'brightness-100 hover:brightness-150 filter grayscale';

    return (
        <footer className={`w-full bg-slate-50 bg-opacity-50 mt-auto ${isHomePage ? 'fixed bottom-0' : ''}`}>
            <div className="flex justify-between items-center mx-auto container">
                <div className="flex flex-row gap-x-2 md:gap-x-1">
                    {socialLinks.map(({ image, href, alt }) => (
                        <a href={href} key={href} className={socials} target="_blank" rel="noreferrer">
                            <img className="h-4 w-4" src={image} alt={alt} />
                        </a>
                    ))}
                </div>
                <p className="p-4 ml-auto text-sm text-white"> Open Byte © 2023</p>
            </div>
        </footer>
    )
}