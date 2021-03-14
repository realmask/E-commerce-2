import { useState } from "react";
import {Button} from '@material-ui/core';
import './quantity.css';
 function Quantity() {
    const [ count, setCount ] = useState(0);

    const incrementer =() =>{
        if(count <= 10)
         return setCount(count + 1);
    }
   const decrementer=()=> {
       if(count != 0) 
         return setCount(count - 1);

       
    }

        return (
            <div>
            <div className ="Counter">
                <div className="count">
                <button className="increase" onClick={() => incrementer()}><b>+</b></button>
                <b className="countValue">{count}</b> 
                <button className="decrease" onClick={() => decrementer()}><b>-</b></button>
                </div>
            </div>
            </div>
        )
    }

    export default Quantity;