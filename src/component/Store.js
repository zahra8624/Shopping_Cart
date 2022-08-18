import React, { useContext, useEffect } from 'react';

// Components
import Product from '../shared/Product';
import Spinner from "../assets/icons/Spinner.gif";

// Context

import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from '../redux/products/productsAction';

// Style
import styles from "./Store.module.css";

const Store = () => {

    const dispatch = useDispatch();
    const  productsState = useSelector(state => state.productsState)

    useEffect(()=>{
        if(! productsState.products.length)  dispatch (fetchProducts())

    },[])

    return (
        <div className={styles.container} >
            {
                productsState.loading ? 
                <img style={{ width: "100%", textAlign:"center"}} src={Spinner} alt="Loading"/> :
                productsState.erroe ? 
                <h1>Something went wrong...</h1> :
                productsState.products.map (item => <Product 
                    key={item.id}
                    productData= {item}
                
                />)

            }
        </div>
    );
};

export default Store;