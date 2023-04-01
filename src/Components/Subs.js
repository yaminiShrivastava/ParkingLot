import './Carousel.css'
import { useState } from "react";
import {subs} from './subscription' 
import { HiOutlineChevronRight,HiOutlineChevronLeft } from "react-icons/hi";
export default function Subs(props){
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
    <div className=" subsHeading">Finding Everyone’s Smart Urban Space Is Our Goal</div>
    <div className='mainCarousel' style={{
        opacity:0.9
    }}>

        <div className=' iconleft light' onClick={dec}><HiOutlineChevronLeft/></div>
            <img className='carouselImg' src={subs[mainind].url} alt='sry'/>
        <div className='carouselcontent' >
            <div className='boldHeading' data-aos="zoom-in" data-aos-duration="2000">{subs[mainind].title}</div>
            <div className='subHeading' data-aos="zoom-in" data-aos-duration="2000">{subs[mainind].sub}</div>
            <div className='CarouselText' data-aos="zoom-in" data-aos-duration="2000">{subs[mainind].description}</div>
            <button className='CarouselBtn' data-aos="zoom-in" data-aos-duration="2000">{subs[mainind].btnTxt}</button>
        </div>
        
        <div className=' iconright light' onClick={inc}><HiOutlineChevronRight/></div>
        
        
    </div>
    </>
    )
}