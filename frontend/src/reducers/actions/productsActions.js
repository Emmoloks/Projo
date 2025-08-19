import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'PRODUCTS_FETCH_REQUEST' });
    try {
        const { data } = await axios.get('/api/products');
        dispatch({ 
            type: 'PRODUCTS_FETCH_SUCCESS', 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: 'PRODUCTS_FETCH_FAILURE',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};