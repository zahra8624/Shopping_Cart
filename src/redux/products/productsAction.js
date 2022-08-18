import axios from "axios";
const fetchProductsRequest = () => {
    return {
        type : "FETCH_PRODUCTS_REQUEST"
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type : "FETCH_PRODUCTS_SUCCESS",
        payload : products
    }

}

const fetchProductsFailure = (error) => {
    return {
        type : "FETCH_PRODUCTS_FAILURE",
        payload : error
    }

}


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch (fetchProductsRequest())
        axios.get("https://fakestoreapi.com/products")
        .then( responce =>{
            const products = responce.data;
            dispatch(fetchProductsSuccess(products))
            
         })
        .catch(error=>{
            const errorMSG = error.message;
            dispatch(fetchProductsFailure(errorMSG))
        })
            

    }
}