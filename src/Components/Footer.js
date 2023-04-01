import './Footer.css'
import { BsTwitter,BsFacebook,BsLinkedin,BsInstagram } from "react-icons/bs";

export default function Footer(){
    return(
        <>
        
        <div className='footer'>
            <div className='light copyright'> © Copyright 2021 Roker.Inc. All rights reserved.</div>
            <div className='socialMedia'>
                <ul className='smIcons'>
                    <li className='light blue'><BsFacebook/></li>
                    <li className='light blue '><BsTwitter/></li>
                    <li className='light blue'><BsLinkedin/></li>
                    <li className='lightblue'><BsInstagram/></li>
                </ul>
            </div>
        </div>
        </>
    )
}