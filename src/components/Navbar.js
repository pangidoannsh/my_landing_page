import Link from "next/link";
import MenuButton from "./MenuButton";

export default function Navbar({ isOpenMenu, handleClickMenu }) {
    return (
        <nav className="fixed flex items-end justify-between w-screen z-30 px-6 md:px-32 h-[130px]">
            <Link href='/'>
                <img src="/white-logo.png" alt="logo" className="w-10" />
            </Link>
            <div className="flex items-center justify-center hover:scale-125 duration-300">
                <MenuButton isClicked={isOpenMenu} handleClicked={handleClickMenu} />
            </div>
        </nav>
    )
}
