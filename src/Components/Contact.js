import './Contact.css'
export default function Contact(){
    return(
    <>
    <div className="contact">
        <div className='main both'>Schedule a demo</div>
        <div className='sub both'>Let's find yout simplified parking in smart urban spaces</div>
        <div className='container'>
            <div className='half ContactImgBox' >
                <img className='ContactImg' src='https://images.unsplash.com/photo-1589018057745-8c699b3f361c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wdHklMjBwYXJraW5nJTIwbG90fGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='parking-lot' data-aos="zoom-in"/>
            </div>
            <form>
                <div className='upper'>
                    <input className='half bottomM' required type="text" placeholder='first name'></input>
                    <input className='half bottomM' required type="text" placeholder='last name'></input>
                </div><div>
                    <input className='half bottomM' required type="text" placeholder='Email'></input>
                    <input className='half bottomM' required type="text" placeholder='Company'></input>
                </div>
                <div>
                    <input className='full bottomM' required type="text" placeholder='Phone'></input>
                </div>
                <div>
                    <textarea className='full ' required type="text" placeholder='Description'></textarea>
                </div>
                <div>
                    <input className='half' required type="text" placeholder='Enter the Captcha'></input>
                    <img className='captcha' src='https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='captcha'/>
                </div>
                <div className='tnc'>
                    <input required type="checkbox"/>
                I agree to the Privacy Policy and Terms of Service. 
        For details, please read ROKER's Privacy Policy
                </div>
                <div>

                <button className='btn' type='submit'>Submit</button>
                <button className='btn' type='reset'>Reset</button>
                </div>
            </form>

        </div>
        

        
    </div>
    
    </>
    )
}