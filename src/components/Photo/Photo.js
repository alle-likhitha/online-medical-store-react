import React from 'react';
import classes from './Photo.module.css';
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
        </div>
        </Aux>
        
    );
}

export default Photo