import {createStore} from 'redux';
import {ProductReducer} from '../reducers/ProductReducer'
const ConfigureStore = () => {
    const store=createStore(ProductReducer)
    return (store);
}
 
export default ConfigureStore;