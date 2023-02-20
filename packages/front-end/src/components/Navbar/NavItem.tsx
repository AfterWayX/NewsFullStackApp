interface NavItemProps{
    title: string,
    href: string,
}

export default function NavItem(props: NavItemProps) {
    const { title, href } = props;
    return (
        <a href={href} className="font-bold text-white">
            {title}
        </a>
    )
}