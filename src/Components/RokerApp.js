import './Advantage.css'
import {RokerAppPoints} from './AdvantagePoint'
import { GiRose } from "react-icons/gi";
export default function RokerApp(){
    return(
        <>
        <div className='FlexOwn light ' id='RokerApp' style={{
            backgroundColor:"rgb(7, 20, 50)",
            padding:"50px 0 3rem 0",
            boxSizing:"border-box",
            clipPath:"polygon(0% 0%, 100% 0%, 100% calc(100% - 3rem), 0% 100%)"

        }} data-aos="zoom-in">
        <div className='AdvantageBox FlexOwn'>
            <img className='advantageImg ' src={RokerAppPoints[2].url} alt='advantage'/>
            <div className='advantageContentBox'>
                <div className='advantageContentBoxHeading'>{RokerAppPoints[1].heading}
</div>
                <div className='advantageContentBoxDescription'>
                    {RokerAppPoints[0].map((i,ind)=>{
                        return (
                            <div className='wrapper ' key={ind}>
                            <div className="AdvantageIcon"><GiRose/></div>
                            
                        <div className='advantagepoint'>{i.Points}</div>
                        <br/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}