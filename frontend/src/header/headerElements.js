import React from 'react'
import { Button } from "@material-ui/core"


 
export default function headerElements(icon) {
   (
        <div>
          <Button>
              <div className="cart">
                 {element(icon)}
              </div>
          </Button>
            
        </div>
    )
}

import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import { Avatar, IconButton } from '@material-ui/core';

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
                <div className="element One">
                    <div className="menuBar">
                        {element(<MenuOpenOutlinedIcon style={{fill:'#AABDE6'}}/>)}
                    </div>
                    <div className="logo">
                       <a href="/">
                        <img src="./logo.png" alt="logo"></img>
                        PhoneCovers</a>
                    </div>
                    <div className="search">
                    <SearchIcon/>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="element Two">
                   
                    
                </div>
                <div className="element Three">
                    <div className="cart">
                        {element(<AddShoppingCartIcon style={{ fill: '#fff' }} />)}
                        
                    </div>
                     <div className="login">
                        {element("login/SignUp")}
                        {element(<Avatar />)}
                        

                    </div> 
                </div>

            </header>

        </div>
    )
}

export default Header
