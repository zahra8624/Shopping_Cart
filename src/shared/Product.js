import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Functions
import {shorter, isInCart, quantityCounter} from "../helpers/functions";

import {useSelector, useDispatch} from "react-redux";
import  {addItem,removeItem,increase,decrease,checkOut,clear} from "../redux/cart/cartAction"

// Icons
import trashIcon from "../assets/icons/trash.svg";

// Style
import styles from "./Product.module.css";

const Product = ({productData}) => {
    const state = useSelector (state => state.cartState);
    const dispatch = useDispatch();


    

    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorter(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    { quantityCounter(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash" /></button>}
                    { quantityCounter(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    { quantityCounter(state, productData.id) > 0 && <span className={styles.counter}>{ quantityCounter(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;