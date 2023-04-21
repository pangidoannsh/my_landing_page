
export default function ScrollAnimationIcon({ onClick, show }) {
    return (
        <>
            {show ? <div className='icon-scroll' onClick={onClick} /> : ''}
        </>
    )
}
