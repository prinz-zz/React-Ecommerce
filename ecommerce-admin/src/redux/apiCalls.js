import { loginStart, loginSuccess, loginFailure } from './userRedux';
import {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
} from './productRedux';
    
import {
    getClientStart,
    getClientSuccess,
    getClientFailure,
    deleteClientStart,
    deleteClientSuccess,
    deleteClientFailure,
    updateClientStart,
    updateClientSuccess,
    updateClientFailure,
    addClientStart,
    addClientSuccess,
    addClientFailure
} from './clientRedux';
import { publicRequest, userRequest } from '../requestMethod';

export const login = async (dispatch, user) => {
    dispatch(loginStart()); 
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    }
    catch (err) {
        dispatch(loginFailure());
    }
}


export const getProducts = async (dispatch) => {
    dispatch(getProductStart()); 
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    }
    catch (err) {
        dispatch(getProductFailure());
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart()); 
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    }
    catch (err) {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async (id, user, dispatch) => {
    dispatch(updateProductStart()); 
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(updateProductSuccess({ id:id, user:user }));
    }
    catch (err) {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart()); 
    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    }
    catch (err) {
        dispatch(addProductFailure());
    }
}

//CLIENT
export const getClients = async (dispatch) => {
    dispatch(getClientStart()); 
    try {
        const res = await userRequest.get('/users');
        dispatch(getClientSuccess(res.data));
    }
    catch (err) {
        dispatch(getClientFailure());
    }
}

export const deleteClients = async (id, dispatch) => {
    dispatch(deleteClientStart()); 
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteClientSuccess(id));
    }
    catch (err) {
        dispatch(deleteClientFailure());
    }
}
