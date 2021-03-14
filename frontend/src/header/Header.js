import React from 'react';

import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import { Avatar, IconButton } from '@material-ui/core';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { Link } from 'react-router-dom';


function Header() {
    const element = items => {
        return (
            <div className="elements">
                <IconButton >{items}</IconButton>
            </div>
        )
    }
    return (
        <div>
            <header>
                <div className="element">
                {element(<MenuOpenOutlinedIcon style={{ fill:'#AABDE6'}} />)}
                     <div className="logo">
                        
                       <Link to="/">
                        <img src="/logo.png" alt="logo"></img>
                       PhoneCovers</Link>
                    </div>
                    <div className="search">
                       {element(<SearchIcon/>)}
                        <input type="text" placeholder="Search" />
                    </div>
                        {element(<Link to="/cart/:id"><AddShoppingCartIcon style={{ fill: '#AABDE6' }} /></Link>)}
                        <Link to="#">Login</Link>
                        {element(<Link to="/favorite">< FavoriteBorderRoundedIcon style={{color:'#AABDE6'}}/></Link>)}
                        {element(<Avatar/>)}
                       

                    </div> 
            

            </header>

        </div>
    )
}

export default Header
