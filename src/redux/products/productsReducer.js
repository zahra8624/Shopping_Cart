const initialState = {
    loading :false,
    products : [],
    error : " "
}

const productsReducer = (state = initialState , action )=>{
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST" :
            return {
                ...state,
                loading :true

            }

        case "FETCH_PRODUCTS_SUCCESS" :
            return {
               loading :false,
              products : action.payload,

        }    
        case "" :
            return {
                loading :false,
                error : action.payload,
                products : []
             }

        default :
        return state;
         


    }

}

export default productsReducer;