import './Carousel.css'
import { useState } from "react";
import data from './MainCarousel.json'
import { HiOutlineChevronRight,HiOutlineChevronLeft } from "react-icons/hi";
export default function Carousel(props){
    const [mainind,setmainind]=useState(0);
    const inc=()=>{
        if(mainind===1)setmainind(0);
        else setmainind(mainind+1);
    }
    const dec=()=>{
        if(mainind===0)setmainind(1);
        else setmainind(0);
    }
    return(
    <>
    <div className='mainCarousel' id='start'>
        <div className=' iconleft light' onClick={dec}><HiOutlineChevronLeft/></div>

                <img className='carouselImg' src={data[mainind].url} alt='sry' />
                <div className='carouselcontent' >
                    <div className='boldHeading' data-aos="zoom-in" data-aos-duration="2000">{data[mainind].bold}</div>
                    <div className='subHeading' data-aos="zoom-in" data-aos-duration="2000">{data[mainind].sub}</div>
                    <div className='CarouselText' data-aos="zoom-in" data-aos-duration="2000">{data[mainind].description}</div>
                    <button className='CarouselBtn' data-aos="zoom-in" data-aos-duration="2000">{data[mainind].btnText}</button>
                </div>
                
        
        <div className=' iconright light' onClick={inc}><HiOutlineChevronRight/></div>
    </div>
    </>
    )
}
