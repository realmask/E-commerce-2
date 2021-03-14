import Axios from 'axios'
import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS } from "../constant"


export const detailsProduct = (ProductId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: ProductId
    });

    try {
        const { data } = await Axios.get(`/api/product/${ProductId}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCESS,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }

}