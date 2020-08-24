import React, { Component } from 'react';
import classes from './Auth.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/lala.png';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import {updateObject, validityCheckHandler} from '../../hoc/Shared/utility';
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
        // const updateState ={
        //     ...this.state.controls,
        //     [controlName]:{
        //         ...this.state.controls[controlName],
        //         value:event.target.value,
        //         touched:true,
        //         isValid:validityCheckHandler(event.target.value,this.state.controls[controlName].validation)
        //     }
        // }

        const updateState = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value:event.target.value,
                touched:true,
                isValid:validityCheckHandler(event.target.value,this.state.controls[controlName].validation)
            })
        });

        this.setState({controls:updateState})
    }

    onChangeSignup=()=>{
        this.setState(prevState =>{
            return {
                isSignup: !prevState.isSignup
            }    
        })
    }
    render(){
        let formeleArray = [];
        for(let key in this.state.controls){
            formeleArray.push({
                id:key,
                config:this.state.controls[key]
            })
           
        }
        let form =(
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
                    <Button btntype='Success' clicked={this.submitHandler}>SUBMIT</Button>
                </form>
        )


        return(
            <div className = {classes.Auth}>
                <div className={classes.Inner}>
                    <div className={classes.Logo}>
                    <Link>
                    <img className={classes.Img} src={logo} alt='Logo'/>
                    </Link>
                    </div>
                    <div>
                    {form}
                    <Button btntype='Danger' clicked={this.onChangeSignup} >SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Auth;