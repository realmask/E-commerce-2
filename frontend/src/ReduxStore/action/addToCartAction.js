import Axios from "axios"
import { ADD_TO_CART, REQUEST_FAIL } from "../constant"

export const addtocart = (productId , qty )  => async(dispatch ,getstate) =>{
    const {data} = await Axios.get(`/api/product/${productId}`)
    try{
        dispatch({
            type: ADD_TO_CART ,
            payload: {
                product_id :data.id,
                product_qnty : qty ,
                product_price: data.price,
                product_image: data.imagePath,
                product_stock: data.countInstock,
                product_name: data.modelName
            }
        })

    }
    catch(err){
        dispatch({
            type: REQUEST_FAIL ,
            payload: err
        })
       }
    localStorage.setItem('cartItems' , JSON.stringify(getstate().cartitems.cartItems));
}



