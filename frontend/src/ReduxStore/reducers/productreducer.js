
import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from "../constant";

export  const productreducer = (state = { productData: [], loading: false }, action) => {
    switch (action.type) {

        case PRODUCT_LIST_REQUEST:
            return { loading: true }

        case PRODUCT_LIST_SUCESS:
            return {
                loading: false,
                productData: action.payload
            }


        case PRODUCT_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
