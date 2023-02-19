import Logo from '../Logo';
import Navbar from '../Navbar/Navbar';
export default function Header() {
    return (
        <header className="border-b border-slate-300 py-5">
            <div className="flex justify-between container mx-auto">
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}