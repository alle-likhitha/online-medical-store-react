import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../hoc/Shared/utility';
import img1 from '../../assets/medicimg/image1.jpeg';
import img2 from '../../assets/medicimg/image2.jpeg';
import img3 from '../../assets/medicimg/image3.jpeg';
import img4 from '../../assets/medicimg/image4.jpeg';
import img5 from '../../assets/medicimg/image5.jpeg';
import img6 from '../../assets/medicimg/image6.jpeg';
import img7 from '../../assets/medicimg/image7.jpeg';
import img8 from '../../assets/medicimg/image8.jpeg';


const Initialstate = {
    items : [
        {id:1,title:'AntiFlam',price:'300',img:img1},
        {id:2,title:'MyoLyf',price:'229',img:img2},
        {id:3,title:'V-Pride',price:'120',img:img3},
        {id:4,title:'Aical-1000',price:'55',img:img4},
        {id:5,title:'Livmet',price:'140',img:img5},
        {id:6,title:'Parasitamol',price:'100',img:img6},
        {id:7,title:'Pills',price:'30',img:img7},
        {id:8,title:'Para15',price:'70',img:img8},
    ],
    addedItems : [],
    total: 0

};

const adding = (state = Initialstate,action) => {
    const additem = state.items.find(item=> item.id === action.id)
    let existed_item= state.addedItems.find(item=> action.id === item.id)
    if(existed_item)
    {
        additem.quantity += 1 
        return updateObject(state, {total: state.total + additem.price })
   }
    else{
        additem.quantity = 1;
       //calculating the total
        let newTotal = state.total + additem.price 
        return updateObject(state, { addedItems: [...state.addedItems, additem], total : newTotal})
       
   }
};

const removing = (state , action)=>{
    const removeitem = state.addedItems.find(item=> item.id === action.id)
    let newitem = state.addedItems.filter(item=> action.id !== item.id)

    let newtot = state.total - (removeitem.price * removeitem.quantity)
    return updateObject(state, {addedItems: newitem, total: newtot})
}

const addquan = (state, action)=>{
    const newqun = state.addedItems.find(item=> item.id === action.id)
    newqun.quantity += 1
    let newtotaladd = state.total + state.addedItems.price
    return updateObject(state, {total: newtotaladd})

}

const removequan = (state, action) =>{
    const remove= state.addedItems.find(item=> item.id === action.id)
    if (remove.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - remove.price
        return updateObject(state, {addedItems: new_items, total: newTotal })

    }
    else{
        remove.quantity -= 1
        let newtotal = state.total - state.addedItems.price
        return updateObject(state, {total: newtotal})
    }
    
}

const cartReducer= (state= Initialstate, action)=>{

    switch(action.type){
        case actionTypes.ADD_MEDICINE: return adding(state,action)
        case actionTypes.REMOVE_MEDICINE: return removing(state,action)  
        case actionTypes.ADD_QUANTITY: return addquan(state,action)
        case actionTypes.REMOVE_QUANTITY: return removequan(state,action)
        default: return state;    
    }
}

export default cartReducer;

