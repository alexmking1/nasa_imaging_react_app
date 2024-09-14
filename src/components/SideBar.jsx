export default function SideBar(props) {
    const { showSideBar, toggleSideBar, data } = props
    return (
        <div className="sidebar">
            <div onClick={toggleSideBar} className="bgOverlay"></div>
            <div className="sidebarContents">
                {<h2>{data?.title} </h2>}
                
                <div className="descriptionContainer">
                    <p>{data?.explanation}</p>

                </div>
                <button onClick={toggleSideBar}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}