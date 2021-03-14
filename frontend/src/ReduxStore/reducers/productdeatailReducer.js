
import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS } from "../constant"


const detailInitialstate = {
    
    loading :false,
    product : [],

}
export const productdetialReducer = (state = detailInitialstate , action ) =>{
          switch(action.type){
              case PRODUCT_DETAILS_REQUEST :
                  return {
                  loading:true,
              }
              case PRODUCT_DETAILS_SUCESS :
                  return {
                      loading : false , 
                      product : action.payload 
              }
              case PRODUCT_DETAILS_FAILURE :
                  return {
                      loading:false ,
                      product: action.payload.error

                  }
              

              default:
                  return state;
          }
}

