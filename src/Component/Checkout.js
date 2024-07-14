
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {changeQuantity} from "../redux/cartSlice"

function Checkout() {

    const dispatch =useDispatch()

    // Use Selector used where we need to access redux store values  
    const items = useSelector(state => state);
console.log(items)
    // In Thali.js I have taken capital P in price n N in Name so here also i need to take same      
    // Total Amt 
    const total = items.cart.reduce((totalItem, item) => totalItem+(item.price * item.quantity ), 0);

    for(let val of items.cart ){                                                                                                    
        console.log("Hii"+val.name)
    }
    
    return (
        <div className="checkout">
        <header>
         <h1> Total Items : {items.cart.length} </h1>
         <p> Amt : Rs {total} </p>
        </header>
        <div className="checkout-container">
          <h1>List of Items</h1>
          <table>
                    <tr>
                    <th>Item_Id</th>
                    <th>Item</th>
                    <th>Item_Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                {items.cart.map((item)=>
                            <tr>
                            <td>{item.id}</td>
                            <td><img src={item.
                            image
} /></td>    
                            <td>{item.name}</td>
                            <td>
                                <select onChange={(e)=>{
                                    dispatch(changeQuantity({...item,quantity:Number(e.target.value)}))}} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </td>
                            <td>{item.price * item.quantity}</td>
                            </tr>
                )}
          </table>

        </div>

      </div>
    )
  }
  export default Checkout;


