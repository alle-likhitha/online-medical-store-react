// import * as actionTypes from '../actions/actionTypes';
// import {updateObject} from '../../hoc/Shared/utility';
// // import img1 from '../../assets/medicimg/image1.jpeg';
// // import img2 from '../../assets/medicimg/image2.jpeg';
// // import img3 from '../../assets/medicimg/image3.jpeg';
// // import img4 from '../../assets/medicimg/image4.jpeg';
// // import img5 from '../../assets/medicimg/image5.jpeg';
// // import img6 from '../../assets/medicimg/image6.jpeg';
// // import img7 from '../../assets/medicimg/image7.jpeg';
// // import img8 from '../../assets/medicimg/image8.jpeg';


// const Initialstate = {
//     items : [],
//     addedItems : [],
//     total: 0.0

// };

// const adding = (state,action) => {
//     console.log(state.items)
//     console.log(action.item)
//     const additem = state.items.find(item=> item.id === action.id)
//     // return(console.log(additem))
//     // console.log(additem,action.id)
//     let existed_item= state.addedItems.find(item=> action.id === item.id)
//     if(existed_item)
//     {   console.log(existed_item)
//         debugger
//         additem.quantity += 1 
//         const newtot = state.total + additem.price
//         return updateObject(state, {total: newtot.toFixed(2) })
//    }
//     else{
//         console.log(additem.id)
//         additem.quantity = 1;
//        //calculating the total
//         let newTotal = state.total + additem.price 
//         return updateObject(state, { addedItems: [...state.addedItems, additem], total : newTotal.toFixed(2)})
       
//    }
// };

// /

// const addquan = (state, action)=>{
//     const newqun = state.addedItems.find(item=> item.id === action.id)
//     newqun.quantity += 1
//     let newtotaladd = state.total + state.addedItems.price
//     return updateObject(state, {total: newtotaladd}.toFixed(2))

// }

// const removequan = (state, action) =>{
//     const remove= state.addedItems.find(item=> item.id === action.id)
//     if (remove.quantity === 1){
//         let new_items = state.addedItems.filter(item=>item.id !== action.id)
//         let newTotal = state.total - remove.price
//         return updateObject(state, {addedItems: new_items, total: newTotal.toFixed(2) })

//     }
//     else{
//         remove.quantity -= 1
//         let newtotal = state.total - state.addedItems.price
//         return updateObject(state, {total: newtotal.toFixed(2)})
//     }
    
// }

// const purchaseMedicStart = (state,action)=>{
//     return updateObject(state)
// }

// const reducer= (state= Initialstate, action)=>{

//     switch(action.type){
//         case actionTypes.ADD_MEDICINE: return adding(state,action)
//         case actionTypes.REMOVE_MEDICINE: return removing(state,action)  
//         case actionTypes.ADD_QUANTITY: return addquan(state,action)
//         case actionTypes.REMOVE_QUANTITY: return removequan(state,action)
        // case actionTypes.PURCHASE_MEDIC_START: return purchaseMedicStart(state,action)
//         default: return state;    
//     }
// }

// export default reducer;

