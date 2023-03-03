import locationicon from '../assets/location-icon.png'

function Content(props) {
    return(
        <div className="content-div">
            <img className="image" /* src={`${props.imageUrl}`} */ src={`${props.imgName}`} />
            <div className="info-div">
                <p><img src={locationicon} /> {props.location} <a href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a></p>
                <h2>{props.title}</h2>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Content