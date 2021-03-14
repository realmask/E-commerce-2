import React from 'react';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import './Product.css'
import { Link } from 'react-router-dom';


export default function Product(props) {
    const { product } = props
    return (
        <React.Fragment>
            <div key={product.id}>
                <Link to={`/product/${product.id}`} className="productBody" >
                    <div className="coverImage" >
                        <img src={product.imagePath} alt={product.modelName}></img>
                        <div className="favorite">
                            < FavoriteBorderRoundedIcon />
                        </div>
                    </div>
                    <div className="modelInfo">
                        <Link to="#">
                            <b>{product.brandName}</b>
                            <b>{product.modelName}</b>
                            <b>{product.price}</b>
                        </Link>
                    </div>

                </Link> 
            </div>
        </React.Fragment>
    )
}
