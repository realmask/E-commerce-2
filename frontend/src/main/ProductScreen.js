import React, { useEffect, useState } from 'react';
import './productscreen.css';
import { Button } from '@material-ui/core';
import Loading from "./Loading.js";
import Message from "./message.js";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { detailsProduct } from '../ReduxStore/action/productDetailAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFav } from '../ReduxStore/action/addToFavAction';



function ProductScreen(props) {
    const dispatch = useDispatch();
    const ProductId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails;
    const [qty, setQty] = useState(1);
    useEffect(() => {
        dispatch(detailsProduct(ProductId))
       

    }, [dispatch, ProductId]);
    function cartHandler() {
        props.history.push(`/cart/${ProductId}?qty=${qty}`)
    }

    function favHandler(){
        dispatch(addToFav(ProductId));
    }
   

    return (
        <>

            { loading
                ? (<Loading></Loading>)
                : error ? (<Message>{error}</Message>)
                    : (
                        <div>
                            <div className="row">
                                <div className="column-2">
                                    <img className="large" src={product.imagePath} alt={product.brandName} />
                                </div>

                                <div className="column-1">

                                    <div className="info">
                                        <ul>
                                            <li>{product.brandName}</li>
                                            <li>{product.modelName}</li>
                                            <li>{product.price}</li>
                                            <Link className="actualprice">₹499</Link>
                                            <li>About this Product </li>

                                        </ul>

                                    </div>
                                    <div className="description">
                                        <ul>
                                            <li>Impact resistant hard plastic case</li>
                                            <li>Matte finish high definition printing</li>
                                            <li>Easy access to standard buttons and ports</li>
                                            <li>Sleek profile</li>
                                        </ul>
                                    </div>
                                    <div className="small">
                                        <img alt="smallproductimage" src={product.imagePath}></img>

                                    </div>
                                    <label>Enter you pincode to check Availability:</label>
                                    <div className="checkAvailability">
                                        <LocationOnOutlinedIcon style={{ fill: 'grey' }} className="pincodelogo" />
                                        <input type="text" className="Availabelpincode" placeholder="Enter pincode" />
                                        <Button style={{ background: '#AABDE6' }}>Check</Button>

                                    </div>

                                </div>
                                {/*  <div className="column-1"> */}
                                <div className="row-1">

                                    <div className="price">


                                        <label>Price:</label>
                                        <b> {product.price}</b>
                                    </div>
                                    <div className=" status">

                                        {product.countInstock === 0 ? <span className="outofstock">Out of Stock</span> : <span className="instock"> In Stock</span>}
                                    </div>

                                    <div className="quantity">
                                        <label>Qty : </label>
                                        {
                                            <>
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {
                                                 [...Array(product.countInstock).keys()].map(x => ( 
                                                               <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                             )
                                                                )}                    
                                        </select>
                                            </>
                                        }
                                    </div>


                                    <div className="addtocart">
                                        <Button className="addtofav" onClick={favHandler}><FavoriteBorderRoundedIcon style={{ color: '#AABDE6', border: '#AABDE6' }} /></Button>
                                        <Button className="cartbutton" style={{ background: '#AABDE6' }} onClick={cartHandler} disabled={product.countInstock === 0 ? true : false}>Add To Cart</Button>

                                    </div>
                                    <Button className="buybutton" style={{ background: '#AABDE6' }} disabled={product.countInstock === 0 ? true : false}><AccountBalanceWalletRoundedIcon />Buy Now</Button>
                                    <hr></hr>
                                    <div className="paymentandlocation">

                                        <HttpsRoundedIcon className="small-1" />
                                        <Link to="#">Secure transaction</Link>


                                    </div>
                                    <hr></hr>
                                    <div className="paymentandlocation">
                                        <LocationOnOutlinedIcon className="small-1" style={{ fill: 'black' }} />
                                        <Link to="#">Select location</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="productView">
                                <div className="productdescription ">
                                    <b>PRODUCT DESCRIPTION</b>
                                    <p> Looking for Link way to match the cool quotient of your style with your Realme 6 Pro? Well checkout PhoneCovers trendy and artistic range of mobile covers.
                           These are made of polycarbonate with Link matte finish, with Link high definition print</p>
                                </div>
                                <div className="policy">

                                    <b>15 DAYS RETURN </b>
                                    <p>Easy returns upto 15 days of delivery.</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="Materialview">
                                <img className="materialimage" src="/backCoverImages/white.png"></img>
                                <div className="materialdescription">
                                    <ol>
                                        <li><b>Complete protection</b><div>Impact-resistant, durable hard plastic case with an extremely slim profile, with raised front bezel for extra screen protection.</div></li>
                                        <li><b>High quality printing</b><div>Expect no peeling, chipping, or wearing off.</div></li>
                                        <li><b>Free access to buttons</b><div>Complete access to all standard buttons and ports, tailored for your device.</div></li>
                                        <li><b>All side design</b><div>Case covers 100% of the outer surface of the phone, precision moulded with no seams or sharp edges.</div></li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                    )
            }

        </>
    )
}

export default ProductScreen;
