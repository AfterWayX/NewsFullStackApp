import NavItem from "./NavItem"

export default function Navbar() {
    const items = [
        {
            title: 'Jobs',
            href: '/jobs'
        },
        {
            title: 'About',
            href: '/about'
        }
    ]
    return (
        <div className="flex items-center gap-5 xl:gap-10">
            {items.map((item) => {
                return (
                    <NavItem key={item.href} {...item}/>
                )
            })}
        </div>
    )
}