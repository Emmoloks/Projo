import axios from 'axios';

export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await axios.get('api/categories');
        dispatch({
            type: 'FETCH_CATEGORIES_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_CATEGORIES_FAILURE',
            payload: error.message
        });
    }
};