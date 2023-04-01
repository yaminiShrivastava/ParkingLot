import './Advantage.css'
import {Advantagepoints} from './AdvantagePoint'
import { GiRose } from "react-icons/gi";
export default function Advantage(){
    return(
        <>
        <div className='AdvantageContainer' id='aboutUs'>

            <div className='headingA' >Pride In Roker As The Future Of Parking</div>
        <div className='FlexOwn ' data-aos="zoom-in">
        <div className='AdvantageBox FlexOwn'>
            <img className='advantageImg' src={Advantagepoints[2].url} alt='advantage'/>
            <div className='advantageContentBox'>
                <div className='advantageContentBoxHeading'>{Advantagepoints[1].heading}</div>
                <div className='advantageContentBoxDescription'>
                    {Advantagepoints[0].map((i,ind)=>{
                        return (
                            <div className='wrapper ' key={ind}>
                            <div className="AdvantageIcon"><GiRose/></div>
                            
                        <div className='advantagepoint'>{i.advantage}</div>
                        <br/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
        
        </div>
        </>
    )
}