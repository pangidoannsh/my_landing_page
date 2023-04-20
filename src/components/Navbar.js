import MenuButton from "./MenuButton";

export default function Navbar({ isOpenMenu, handleClickMenu }) {
    return (
        <nav className="fixed flex justify-between w-screen z-30 px-32 my-20">
            <img src="/white-logo.png" alt="logo" className="w-10" />
            <div className="flex items-center justify-center">
                <MenuButton isClicked={isOpenMenu} handleClicked={handleClickMenu} />
            </div>
        </nav>
    )
}
