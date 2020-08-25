import React, { Component } from 'react';
import classes from './Auth.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/lala.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import {updateObject} from '../../hoc/Shared/utility';
import Aux from '../../hoc/Aux/Aux';
import Phone from '../../assets/images/Phone.png';
import Mail from '../../assets/images/Mail.png';
import Insta from '../../assets/images/Insta.png';
// import {updateObject, validityCheckHandler} from '../../hoc/Shared/utility';
import { validityCheckHandler } from '../../hoc/Shared/utility';
import * as actions from '../../store/actions/index';
import Spinner from '../../ui/Spinner/Spinner';


class Auth extends Component{
    static navigationOptions = {
        header: null
    }
    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Mail Id'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true

                },
                isValid:false,
                touched:false,
                label:"Email ID:"

            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: 7

                },
                isValid:false,
                touched:false,
                label:'Password:'

            }
            
        },
        isSignup:true
    }
    
      
    formChangeHandler(event, controlName){
        // console.log(this.state.controls)
        const updateState = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value:event.target.value,
                touched:true,
                isValid: validityCheckHandler(event.target.value, this.state.controls[controlName].validation)
            })
        });

        this.setState({controls:updateState})
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render () {
        let formeleArray = [];
        for(let key in this.state.controls){
            formeleArray.push({
                id:key,
                config:this.state.controls[key]
            })
           
        }
        let form =(
            <Aux>
            <form >
            {/*  <form> */}
                    {/* <Input elementType='...' elementConfig='..'  value='..'></Input> */}
                    
                    {formeleArray.map(formelement=>(
                        <Input key={formelement.id}
                        elementType={formelement.config.elementType}
                        elementConfig={formelement.config.elementConfig}
                        value={formelement.config.value} 
                        shouldValidate={formelement.config.validation}
                        changed={(event)=> this.formChangeHandler(event, formelement.id)}
                        touched={formelement.config.touched}
                        invalid={!formelement.config.isValid}
                        label={formelement.config.label} />
                        
                    ))}
                    {/* disabled={!this.state.formisvalid} */}
                    {/* <Button btntype='Success' clicked={this.submitHandler}>SUBMIT</Button> */}
                </form>
            </Aux>

        )

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <div className={classes.Auth123}>
                <div className = {classes.Auth}>
                <div className={classes.Inner}>
                {authRedirect}
                {errorMessage}
                    <div className={classes.Logo}>
                    <Link>
                    <img className={classes.Img} src={logo} alt='Logo'/>
                    </Link>
                    </div>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                </div>

            </div>
            <div className={classes.Contactus}>
                <h2>Contact us</h2>
                    <div className={classes.DivContact}>
                    <div className={classes.Phone}>
                    <img src={Phone} style={{height:'60px',width:'60px'}} alt='Phone Icon'/>
                    <h5>Talk to us:+91 900*****99</h5></div>
                    <div className={classes.Phone}>
                    <img src={Mail} style={{height:'60px',width:'60px'}} alt='Mail Icon'/>
                    <h5>MailId: medicstore.india@gmail.com</h5>
                    </div>
                    <div className={classes.Phone}>
                     <img src={Insta} style={{height:'60px',width:'60px'}} alt='Insta Icon'/>
                    <h5>Follow us on: medic_store</h5></div>
                     </div>
                     </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        // buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );