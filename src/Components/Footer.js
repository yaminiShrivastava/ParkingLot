import './Footer.css'
import { BsTwitter,BsFacebook,BsLinkedin,BsInstagram } from "react-icons/bs";

export default function Footer(){
    return(
        <>
        
        <div className='footer'>
            <div className='light copyright'> © Copyright 2021 Roker.Inc. All rights reserved.</div>
            <div className='socialMedia'>
                <ul className='smIcons'>
                    <li className='light'><BsFacebook/></li>
                    <li className='light'><BsTwitter/></li>
                    <li className='light'><BsLinkedin/></li>
                    <li className='light'><BsInstagram/></li>
                </ul>
            </div>
        </div>
        </>
    )
}