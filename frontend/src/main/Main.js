/* import { response } from 'express'; */
import React, { useEffect } from 'react';
import Product from './Product';
import Loading from "./Loading.js";
import Message from "./message.js";
import { listProduct } from '../ReduxStore/action/productaction';
import { useDispatch, useSelector } from 'react-redux';



function Main() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading , error , productData} = productList
  useEffect(() => {
      dispatch(listProduct())
  }, [dispatch])
    return (
        <>
            { loading
                ? (<Loading></Loading>)
                : error ? (<Message>{error}</Message>)
                : (
                        <div className="main">
                            <div className="row-column">
                                {
                                    productData.map(product => {
                                        return (
                                            <>
                                                <Product product={product}  />

                                            </>
                                        )

                                       
                                    }

                                    )

                                }
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Main
