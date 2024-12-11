import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { ReducerApi as productReducer } from './ReducerApi';
import { myReducer as counterReducer } from '../Redux-Counter/Reducer';
import { myReducer as todoReducer } from '../Redux/Reducer';

const RootReducer = combineReducers({
    products: productReducer, 
    counter: counterReducer,
    ReduxTodo: todoReducer, 
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export default RootReducer;