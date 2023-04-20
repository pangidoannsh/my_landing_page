
export default function MenuButton({ isClicked, handleClicked }) {

    return (
        <button className={`relative z-50 bg-white h-10 w-10 rounded-full duration-200`}
            onClick={() => handleClicked()}
        >
            <div id="nav-icon" className={`${isClicked ? 'open' : ''}`}>
                <span className={`bg-[#1C1B1F]`}></span>
                <span className={`bg-[#1C1B1F]`}></span>
            </div>
        </button>
    )
}
