import { ADD_To_FAV, ERROR_In_ADDING } from "../constant"
import axios from "axios";

export const addToFav  = (product_id) => async(dispatch ) => {
   const { data } = await axios.get(`/api/product/${product_id}`)
     try {
         dispatch({
         type : ADD_To_FAV,
         payload :{
             id: data.id,
             image: data.imagePath,
             name: data.modelName,
             price: data.price,
             brandName:data.brandName,
             category :data.category
          /*    About_stock: ProductStock,
              */
         }

     })
    }
    catch(error){
         dispatch({
             type: ERROR_In_ADDING,
             payload:error
         })
    }
} 