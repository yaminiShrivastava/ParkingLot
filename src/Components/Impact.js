import './Impact.css'
import {ImpactCard} from './AdvantagePoint'

import Tilt from 'react-parallax-tilt';
export default function Impact(){
    return(
    <>
    <div className='ImpactHeading '>The Impact Roker Has Made Already</div>
        <div className='ImpactBoxes light'>
        {ImpactCard[0].map((i,ind)=>{
            return(
                <Tilt className="parallax-effect" perspective={500} glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" key={ind}>
                <div className='ImpactCard' data-aos="zoom-in" >
                    <img className='ImpactImg' src={i.url} alt='Impact' />
                    <Tilt>
                    <div className='ImpactContentBox'>
                        <div className='ImpactContentBoxHeading'>{i.bold}</div>
                        <div className='ImpactContentBoxText'>- {i.city}</div>
                    </div>
                    </Tilt>
      
                </div>
                </Tilt>
            )
        })}
</div>
    
    </>
    )
}