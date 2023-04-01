import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link} from 'react-scroll'

import './Navbar.css'
export default function Navbar(){
    const [whiteimg,setwhiteimg]=useState(true);
    const [darknavbar,setdarknavbar]=useState(true);
    const [hamb,sethamb]=useState(false);
    const scrollcheck=()=>{
        // console.log(window.scrollY);
        if(window.scrollY>=34){
            setwhiteimg(false);
            setdarknavbar(false);
        }else{
            setwhiteimg(true);
            setdarknavbar(true);
        }
    }
    window.addEventListener('scroll',scrollcheck);

    return(
    <>
        <div className={darknavbar===true?'nvbr':'nvbr active'}>
            <div className='left'>
                
                <li><Link to="h" spy={true} smooth={true} offset={0} duration={700}><img className='heading nvbrImg' src="https://www.rokerinc.com/wp-content/uploads/2021/06/logo_Roker-White-Logo.svg"alt="logo"/></Link></li>
                
            </div>
            <ul className='navItems '>
                <li><Link to="Mobility" spy={true} smooth={true} offset={0} duration={700}>Urban Mobility</Link></li>
                <li><Link to="aboutUs" spy={true} smooth={true} offset={0} duration={700} href=".aboutUs">About Us</Link></li>
                <li><Link to="RokerPlus" spy={true} smooth={true} offset={0} duration={700} href="/">Platform</Link></li>
                <li><Link to="toParticular" spy={true} smooth={true} offset={0} duration={700} href="/">Our World</Link></li>
                <li><Link to="RokerApp" spy={true} smooth={true} offset={0} duration={700} href="/">Roker App</Link></li>
                <li><Link to="test1" spy={true} smooth={true} offset={0} duration={700} href="/">Blog</Link></li>
                
            </ul>
            <div className='rght'>
                <button className={darknavbar===true?"nbr-cntact NvbrBtn":'nbr-cntact NvbrBtn'}>Contact</button>
            </div>
            


            <div className={hamb===true?'mobileIcons':"nd"}>
            <ul className='mobileItems'>
            <li><Link to="Mobility" spy={true} smooth={true} offset={0} duration={700}>Urban Mobility</Link></li>
                <li><Link to="aboutUs" spy={true} smooth={true} offset={0} duration={700} href=".aboutUs">About Us</Link></li>
                <li><Link to="RokerPlus" spy={true} smooth={true} offset={0} duration={700} href="/">Platform</Link></li>
                <li><Link to="toParticular" spy={true} smooth={true} offset={0} duration={700} href="/">Our World</Link></li>
                <li><Link to="RokerApp" spy={true} smooth={true} offset={0} duration={700} href="/">Roker App</Link></li>
                <li><Link to="test1" spy={true} smooth={true} offset={0} duration={700} href="/">Blog</Link></li>
                
            </ul>
            </div>


            <div className={whiteimg===true?'mobileSymbol light':'mobileSymbol light '}>
                <div className='hambi FlexOwn' onClick={()=>{
                    sethamb(!hamb)
                }}>

                {hamb===true?<GrClose/>:<GiHamburgerMenu/>}
                </div>



            </div>
        </div>
    </>
    )
}