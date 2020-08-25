import React ,{Component} from 'react';
import Button from '../../../ui/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios';
import Spinner from '../../../ui/Spinner/Spinner';
import Input from '../../../ui/Input/Input';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {updateObject, validityCheckHandler} from '../../../hoc/Shared/utility';

class ContactData extends Component{

    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: 8
                },
                isValid:false,
                touched:false,
                label:'Name:'

            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: 4
                },
                isValid:false,
                touched:false,
                label:'Street:'

            },               
            city:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'City'
                },
                value:'',
                validation:{
                    required:true,
                    minLength: 4
                },
                isValid:false,
                touched:false,
                label:'City:'

            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP code'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5
                },
                isValid:false,
                touched:false,
                label:'ZipCode:'

            },       
            emailid:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-Mail'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail: true
                },
                isValid:false,
                touched:false,
                label:'Email ID:'

            },    
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Normal'}

                    ]
                },
                validation:{
                },
                value:'fastest',
                isValid:true,
                label:'Delivery Method:'
            }    
        },
        formisvalid:false
    };

    orderHandler=(event)=>{
        event.preventDefault();
        // console.log(this.props.ingredients)
        this.setState({loading:true})
        const formData={};
        for(let formid in this.state.orderForm){
            formData[formid]=this.state.orderForm[formid].value
        }
        // const order={
        //     ingredients:this.props.ings,
        //     price:this.props.price,
        //     orderData: formData,
        //     userId: this.props.userId
            
        // }

        this.props.onPurchaseMedic(this.props.added,this.props.userid);
        
    }

    formChangeHandler=(event, id)=>{
        // const formOrder ={
        //     ...this.state.orderForm
        // };
        // const formOrderEle ={
        //     ...formOrder[id]
        // };
        const formOrderEle = updateObject(this.state.orderForm[id], {
            value:event.target.value,
            isValid: validityCheckHandler(event.target.value, this.state.orderForm[id].validation),
            touched: true
        });
        // formOrderEle.value= event.target.value;
        // formOrderEle.isValid=validityCheckHandler(event.target.value, this.state.orderForm[id].validation)
        // formOrderEle.touched=true;
        // formOrder[id]=formOrderEle;

        const formOrder = updateObject(this.state.orderForm, {
            [id]: formOrderEle
        });

        let formisvalid=true;
        for(let id in formOrder){
            formisvalid= formOrder[id].isValid && formisvalid
        }

        // console.log(formOrderEle)
        this.setState({orderForm:formOrder, formisvalid:formisvalid})
    }

    render(){
        let formeleArray = [];
        for(let key in this.state.orderForm){
            formeleArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
           
        }
        let form =(
            // <form onSubmit={this.orderHandler}>
            <form>
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

                    <Button btntype='Success' disabled={!this.state.formisvalid}clicked={this.orderHandler}>Order</Button>
                </form>
        )
        if(this.props.loading){
            form = <Spinner/>
        }


        return(
            <div className={classes.ContactData}>
                <h3>Enter Your Contact Data</h3>
                {form}
            </div>
        );
    }
}

const mapStatetoProps= state =>{
    return{
        // ings: state.burgerBuilder.ingredients,
        added : state.cart.addedItems,
        price: state.cart.total,
        loading: state.cart.loading,
        userid: state.auth.userid
        // token:state.auth.tokenId,
        // userId:state.auth.userId
    }
}

const mapDispatchtoProps= dispatch=>{
    return{
        onPurchaseMedic :(orderData,userid)=>dispatch(actions.purchaseMedicStart())
    }
    
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ContactData, axios);