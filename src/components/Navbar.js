import Link from "next/link";
import MenuButton from "./MenuButton";
import Image from "next/image";

export default function Navbar({ isOpenMenu, handleClickMenu }) {
    return (
        <nav className="fixed flex items-end justify-between w-screen z-50 px-6 md:px-24 lg:px-32 h-[130px]">
            <Link href='/'>
                <Image src="/white-logo.png" alt="logo" width={40} height={46} />
            </Link>
            <div className="flex items-center justify-center hover:scale-125 duration-300">
                <MenuButton isClicked={isOpenMenu} handleClicked={handleClickMenu} />
            </div>
        </nav>
    )
}
