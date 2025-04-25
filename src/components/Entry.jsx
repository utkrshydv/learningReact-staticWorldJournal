export default function Entry(props){
  return(
    <>
    <article className="journal-entry">
    
     
        <div className="main-image-container">
        <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt}/>
        </div>

        <div className="info-container">
        <img className="marker"  src="src/assets/marker.png"/>
        <span>{props.entry.country}</span>
        <a href={props.entry.googleMapsLink}>View on Google Maps</a>
        <h2>{props.entry.title}</h2>
        <p>{props.entry.dates}</p>
        <p>{props.entry.text}</p>
        <hr />
      </div>
      
    </article>
    </>
  )

}