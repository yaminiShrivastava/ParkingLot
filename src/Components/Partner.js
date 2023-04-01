import './Partner.css'
import { RxDot } from "react-icons/rx";
import { Partneri,Review } from './AdvantagePoint'
import { useEffect, useState } from 'react';
export default function Partner(){
    const [currentno,setCurrentNo]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(currentno===1)setCurrentNo(0);
            else setCurrentNo(currentno+1);
        },2000)
    })
    return(
        <>
        <div className='fullBox '>
            <div className='PartnerBox' data-aos="zoom-in">

                <div className='PartnerHeading '>{Partneri[0].heading}</div>
                <div className='PartnerLogo '>
                    {Partneri[1].map((i,ind)=>{
                        return <img className='PartnerImg' src={i} alt="" key={ind}/>
                    })}
                </div>


            </div>
            <div className='ReviewBox' data-aos="zoom-in">
                <div className='PartnerHeading'>
                    {Review[0].heading}
                </div>
                
                        
                <div className='ReveiwContentBox'>
                    <div className='Review'>{Review[1][currentno].review}</div>
                    <div className='ReviewBy'>{Review[1][currentno].by}</div>
                    <div className='ReviewFrom'>{Review[1][currentno].city}</div>
                </div>
                    <div className='ReviewDots FlexOwn'>
                        {Review[1].map((i,ind)=>{
                            return<div key={ind}  className={ind===currentno?"NormalDot":"NormalDot activeDot"}> <RxDot/> </div>
                        })}
                    </div>
                

                


            </div>
        </div>
        </>
    )
}