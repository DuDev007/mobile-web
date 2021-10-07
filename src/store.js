import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer';
import { productListReducer,productDetailsReducer } from './reducers/productReducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }
const initialState ={}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig,reducers)

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools
    (applyMiddleware(...middleware)))


export default store;
