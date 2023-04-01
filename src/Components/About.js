import './About.css'
import AboutCard from './AboutCard'
export default function About(){
    return(
        <>
        <div className='aboutContainer' id='Mobility'>
            <div className='aboutText'>
                <div className='aboutHeading' data-aos="zoom-in">
                Roker – One Window To The Future Of Urban Mobility
                </div>
                <div className='aboutsubText' data-aos="zoom-in">
                    <div>
                    Multiple micro-mobility solutions today are standalone in nature - be it in payments, parking, tokenization, enforcements, etc.
                    </div>
                <div>
                Roker brings an End-to-end integrated mobility platform for Parking Management that will converge with smart city initiatives across the globe. Allowing Parking Asset Owners and Individuals to collaborate, Monetize and Consume Parking Space - it’s One Window for Urban Mobility.
                </div>
                
                </div>
            </div>
            <div className='aboutcards'>

                <div className='firstSide mid'>
                    <AboutCard className="frstBox box" title="Parking Management" text="efficient, connected, secured, an all in one ecosystem." url="https://i.pinimg.com/564x/c2/2e/ad/c22ead45f2314f0fdfa3962b5050af26.jpg"/>
                </div>
                
                <div className='secondSide'>
                    <AboutCard className="secondBox box" title="Parking Management" text="efficient, connected, secured, an all in one ecosystem." url="https://i.pinimg.com/564x/d1/71/1f/d1711fe095111fe4544d1e5b1fc280a2.jpg"/>  
                    <AboutCard className="thrdBox box" title="Parking Management" text="efficient, connected, secured, an all in one ecosystem." url="https://www.dotmagazine.online/_Resources/Persistent/d/e/d/8/ded8c583997353e6dbffbd8a03d961572cf1ee1e/iStock-680359456%20copy-1440x810-720x405.jpg"/>
                </div>
            
                <div className='thrdSide mid'>
                    <AboutCard className="fourthBox box" title="Parking Management" text="efficient, connected, secured, an all in one ecosystem." url="https://i.pinimg.com/474x/fd/0d/04/fd0d04e9845c07d4916145b555f01d70.jpg"/>
                </div>

            </div>
        </div>
            
        </>
    )
}