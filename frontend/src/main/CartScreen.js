import React, { useEffect } from 'react'
import './cartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../ReduxStore/action/addToCartAction';
import Quantity from './Quantity'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Button, Link } from '@material-ui/core';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';

function CartScreen(props) {
    const dispatch = useDispatch()
    const trusted = true;
    const companyName = "PhoneCover.in";
    const seller= "PhoneCovers";
    const productId = props.match.params.id;
    const cartitems = useSelector(state => state.cartitems)
    const { cartItems } = cartitems
    let  SubTotal = 0 ;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1]) : 1;
    useEffect(() => {
        if (productId) {
            dispatch(addtocart(productId, qty))
        }

    }, [dispatch, productId, qty])

    const cartproduct = cartItems.map(item => {
           SubTotal = SubTotal + item.product_price;
        return (
            <div key={item.product_id}>
                <hr></hr>
                <div className="cartProduct">
                    <img src={item.product_image} alt={item.product_name} />
                    <div className="cartProductDes">
                        <h1>{item.product_name}</h1>
                        <div className="shippedlogo"><LocalShippingOutlinedIcon style={{ opacity: '0.3', padding: '2px' }} /><b>PhoneCovers Delivered </b> </div>
                        <div>{trusted ? <div className="trusted"><LoyaltyOutlinedIcon style={{ fill: 'white', marginLeft: '2px', fontSize: 'small' }} /><b>Fulfilled </b> </div>
                            : ""} </div>
                        <div className="sellerInfo"><b>Sold by </b><Link to="#">{seller}</Link></div>
                        <div className="cartQuantityUpdate">
                            <Quantity />
                             <DeleteOutlinedIcon style={{fill:'rgb(48, 56, 72)' ,}}/>
                        </div>
                    </div>
                    <h1>{item.product_price}</h1>
                
                </div>
            </div>
        )
    })
    return (
        <div>

            <div className="cart">
                
                <div className="cartFirstColumnDiv">
                    <div className="cartAllProducts">
                        <div className="cartHeader">
                            <h1>Shopping Cart</h1>
                            <li>Price(in ₹)</li>
                        </div>


                        {cartproduct}
                    </div>
                    <p>The price and availability of item at {companyName} are subject to change. The shopping cart is a temporary place to store a
                    list of your item and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>

                </div>
                <div className="cartPaymentDes">
                    <div className="purchaseNotation">
                        <img src="/logo.png" />
                        <b>100% Purchase-Protection
                        <li>Original-Product |Secure-Payment</li>
                        </b>
                    </div>
                    <div className="amountToPay">
                        <b> Sub-Total:{SubTotal}</b>
                        <Button style={{
                            background: '#AABDE6',
                            height: '40px',
                            fontWeight: 'bolder',
                            fontSize: '18px',
                            color: 'background-color: rgb(48, 56, 72);',
                            opacity: '1'
                        }}>Proceed To Buy</Button>
                    </div>
                </div>{/* 
            <div className="producthistory">
                <div className="historyProductImage">
                    <img src={item.product_image} />
                    <div className="newUser">
                        <p>See personalized recommendations</p>
                        <button>signin</button>
                        <p>New user ?
                         <link to="#" >Start here</link>
                        </p>
                    </div>

                </div>
            </div> */}
            </div>

        </div>

    )
}

export default CartScreen
