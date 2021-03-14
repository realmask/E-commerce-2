import { ADD_TO_CART, REQUEST_FAIL } from "../constant";

const cartInitialState = {
    cartItems: [],

}

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
           const items = action.payload;
             const existItems = state.cartItems.find((id) => id.product_id === items.product_id);
            if (existItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((id) => id.product_id === existItems.product_id ? items : id)
                }
            } 
            else{ 
                return {
                    ...state,
                    cartItems:  [...state.cartItems, items] ,
                
                }
            }
         
        case REQUEST_FAIL:
            return {
                ...state ,
                cartItems:action.payload
            }    
        default:
            return state;
    }
}