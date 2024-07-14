import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            const {id} = action.payload;
            if (!state.find(item => item.Id ===id)) {
                state.push(action.payload);
            }else{
                console.log("Already Added");
            }
        },
        removeItem: (state, action) => {
            // ye item.Id jo redux em store h vo vali h 
            return state.filter(item => item.Id !== action.payload);
        },
        changeQuantity:(state,action)=>{
            const {id} =action.payload
            state.forEach((value,i)=>{
                
                if(value.id==id){
                        state[i]=action.payload
                    }
            })
            
        }

    }
})

export const {addItem, removeItem,changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;


