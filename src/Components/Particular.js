import './Particular.css'
import { ParticularContent } from './AdvantagePoint'
export default function Particular(){
    return(
    <>
    <div className='fullParticularBox ' id='toParticular' data-aos="zoom-in">
        <div className='ParticularContents' >
            <div className='particularHeading'>{ParticularContent[1].heading}</div>
            <div className='particularDescription'>{ParticularContent[1].Text}</div>
        </div>
        <div className='FlexOwn AllParticularCards'>
            {/* card */}
            {ParticularContent[0].map((i,ind)=>{
                return(
                        <div className='ParticularCard light' data-aos="zoom-in" key={ind}>
                            <img className='ParticularCardImg' src={i.url} alt={ind}/>
                            <div className='PArticularCardBody'>
                                <div className='ParticularCardHeading'>{i.heading}</div>
                                <div className='ParticularCardContent'>{i.content}</div>
                            </div>
                        </div>
                    
                )
            })}
            



        </div>
    </div>
    </>
    )
}