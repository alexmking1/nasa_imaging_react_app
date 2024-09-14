export default function Main(props) {
    // props from App.jsx (which will be the img from the NASA API fetch)
    const { data } = props

    return (
        <div className="imgContainer">
            <img src={data?.hdurl} alt={data.title || 'bg-img'} className="bgImage"/>
        </div>
    )
}
