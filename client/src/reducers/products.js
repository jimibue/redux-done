import axios from 'axios'
import { START_LOADING, STOP_LOADING, SET_ERROR, CLEAR_ERROR } from './ui'

// these another file as 
const PRODUCTS = "PRODUCTS"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const UPDATE_PRODUCT = "UPDATE_PRODUCT"


// actions 
export const getProducts = () => {
  return (dispatch) => {
    dispatch({type: START_LOADING})
    dispatch({type: CLEAR_ERROR})
    axios.get("/api/products").then((res) => {
      dispatch({type: PRODUCTS, products: res.data})
      dispatch({type: STOP_LOADING})
    }).catch( err => {
      dispatch({type: SET_ERROR, error: err})
      dispatch({type: STOP_LOADING})
    })
  }
 }

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios.delete(`/api/products/${id}`).then((res) => {
      dispatch({type: DELETE_PRODUCT, id: res.data.id})
    });
  }
}

export const updateProduct = (id) => {
  return (dispatch) => {
    axios.put(`/api/products/${id}`).then((res) => {
      dispatch({type:UPDATE_PRODUCT, product: res.data })
    });
  }
}


 // reducer

 export default (state = [], action) =>{
   switch(action.type) {
    case PRODUCTS:
      return action.products
    case DELETE_PRODUCT:
      return state.filter( p => p.id !== action.id)
    case UPDATE_PRODUCT:
      return state.map( p => {
        if(p.id !== action.product.id) 
          return p
        return action.product  
      })
    default:
      return state
   }
 }

//  const newProds = this.state.products.filter((p) => p.id !== res.data.id);
//  this.setState({ products: newProds });