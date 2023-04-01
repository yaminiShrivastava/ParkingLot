import './RokerPlus.css'
import a from '../rokerplus.png'
export default function RokerPlus(){
    return(
        <>
        <div className='RokerPlus light' id='RokerPlus' data-aos="zoom-in">
            <div className='RokerPlusHeading'>
            Smart Mobility Possibilities – Serviced Under Roker PLUS
            </div>
            <img className='rokerplusimg' src={a} alt='roker'/> 
        </div>
        </>
    )
}