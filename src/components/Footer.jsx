export default function Footer(props) {
    const { showSideBar, toggleSideBar, data } = props


    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2 style={{ textAlign: 'left' }}>{data?.title}</h2>
            </div>
            <button onClick={toggleSideBar}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}