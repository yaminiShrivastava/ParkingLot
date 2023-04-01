import './AboutCard.css'
export default function AboutCard(props){
    return(
        <>
        <div className="aboutCard" >
        <img src={props.url} className="cardImg" alt="..."/>
        <div className="cardBody">
            <h5 className="cardTitle">{props.title}</h5>
            <p className="cardText">{props.text}</p>
        </div>
        </div>
        </>
    )
}