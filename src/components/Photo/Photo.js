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
        <h2>About Us</h2>
        <h3>Health Comes Home</h3>
        <p style={{height:'70%', width:'80%',marginLeft:'140px',fontSize:'20px'}}>MedicStore is a holistic healthcare company that aims to make healthcare accessible and affordable in the country. 
        In order to streamline the functioning of the health industry, we have brought doctors, pharmacists, phlebotomists and consumers under one digital ambit.
         This will save you from the burden of waiting in long queues, riding to a medical store.</p>
        </div>
        <div className={classes.Contactus}>
        <h2>Contact us</h2>
        <div className={classes.DivContact}>
        <div className={classes.Phone}>
            <img src={Phone} style={{height:'100px',width:'100px'}} alt='Phone Icon'/>
            <p>Talk to us:+91 900*****99</p></div>
        <div className={classes.Phone}>
            <img src={Mail} style={{height:'100px',width:'100px'}} alt='Mail Icon'/>
            <p>MailId: medicstore.india@gmail.com</p>
        </div>
        <div className={classes.Phone}>
            <img src={Insta} style={{height:'100px',width:'100px'}} alt='Insta Icon'/>
            <p>Follow us on: medic_store</p></div>
        </div>
        
        </div>
        </Aux>
        
    );
}

export default Photo