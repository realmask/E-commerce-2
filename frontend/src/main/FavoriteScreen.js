import React  from 'react'
import { useSelector } from 'react-redux'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Button, Link } from '@material-ui/core';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';


function FavoriteScreen() {
    const favoriteproduct = useSelector(state => state.favoriteproduct);
    const { favproduct } = favoriteproduct ;
    const trusted = true;
    const seller= "PhoneCovers";
    const favoriteProductlist = favproduct.map(item => {
        return (
            <div key={item.product_id}>
                <hr></hr>
                <div className="cartProduct">
                    <img src={item.image} alt={item.name} />
                    <div className="cartProductDes">
                        <h1>{item.name}</h1>
                        <b><label>Category:</label>{item.category}</b>

                        <div className="shippedlogo"><LocalShippingOutlinedIcon style={{ opacity: '0.3', padding: '2px' }} /><b>PhoneCovers Delivered </b> </div>
                        <div>{trusted ? <div className="trusted"><LoyaltyOutlinedIcon style={{ fill: 'white', marginLeft: '2px', fontSize: 'small' }} /><b>Fulfilled </b> </div>
                            : ""} </div>
                        <div className="sellerInfo"><b>Sold by </b><Link to="#">{seller}</Link></div>
                    </div>
                    <h1>{item.product_price}</h1>

                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>Favoriote Product</h1>
            <div className="favoriteList">{favoriteProductlist}</div>
        </div>
    )
}

export default FavoriteScreen
