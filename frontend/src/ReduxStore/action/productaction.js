import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from '../constant'
import axios from 'axios'


export const listProduct = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })

    try {
        const { data } = await axios.get('/api/product');

        dispatch({
            type: PRODUCT_LIST_SUCESS,
            payload: data
        })
    }
    catch (error) {

        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: error.message
        })
    }
}