import { useNavigate } from "react-router-dom";
import menuData from './APIdata.json';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { useSelector } from "react-redux";

function Thali() {

    const dispatch= useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const cartitems = useSelector(state => state);

    useEffect(() => {
        const edata = menuData.menu;
        setData(edata);
    }, []);

    const handleCheckout = (event) => {
        if (cartitems.cart.length >= 2) {
            navigate('/checkout')
            setErrorMessage(""); // Clear the error message if condition is met
        } else {
            setErrorMessage("Add at least 2 Product Items before checking out.");
        }
    }

    return (
        <>
            <nav>
                <label>FOODIEE...</label>
                <a>Home</a>
                <a>Items</a>
                    <button className="cartCheckout" onClick={handleCheckout}>
                      Checkout🛒
                    </button>
            </nav>
            {errorMessage && <p className="error">{errorMessage}</p>}   
            <div className="item-container">
                {data.map((item, i) => {
                    return (
                        <div className="item" key={i}>
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <label>{item.label}</label>
                            <label>Price : Rs {item.price}</label>
                            <div>
                                <button onClick={() => {
                                    dispatch(addItem({
                                        // we r using here spread optr so that hmare data ki shallow copy na bne
                                        ...item,
                                        quantity:1,
                                        // instead of this we r passing whole api as "item" 
                                        // Name: item.name,
                                        // Price: item.price,
                                        // Id: item.id
                                    }));
                                }}>

                                    Add Item
                                </button>
                                <span className="btn-space"></span>
                                <button onClick={() => {
                                    dispatch(removeItem(item.id))
                                }}>Remove</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default Thali;


