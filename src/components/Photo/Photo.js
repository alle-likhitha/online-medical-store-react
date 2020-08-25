import React from 'react';
import classes from './Photo.module.css';
import Phone from '../../assets/images/Phone.png'
import Mail from '../../assets/images/Mail.png';
import Insta from '../../assets/images/Insta.png'
// import Pic from '../../assets/images/img2.jpg'
import Aux from '../../hoc/Aux/Aux';
const Photo = props =>{
    return(
        <Aux>
            <div className={classes.Photo}>
            <div className={classes.ImgDiv}>
                {/* <img src={Pic} alt='Pic'/> */}
                <p>Get Started by choosing the above categories!!</p>
            </div>
        </div>
        <div className={classes.About}>
        <h2>About</h2>
        </div>
        <div className={classes.Contactus}>
        <h2>Contact us</h2>
        <div className={classes.DivContact}>
        <div className={classes.Phone}>
            <img src={Phone} style={{height:'100px',width:'100px'}} alt='Phone Icon'/>
            <h5>Talk to us:+91 900*****99</h5></div>
        <div className={classes.Phone}>
            <img src={Mail} style={{height:'100px',width:'100px'}} alt='Mail Icon'/>
            <h5>MailId: medicstore.india@gmail.com</h5>
        </div>
        <div className={classes.Phone}>
            <img src={Insta} style={{height:'100px',width:'100px'}} alt='Insta Icon'/>
            <h5>Follow us on: medic_store</h5></div>
        </div>
        
        </div>
        </Aux>
        
    );
}

export default Photo