import {connect} from 'react-redux';
import {addProduct} from '../action/actionCreator';

const Card = ({product,addProductToCart}) => {
    let {image,name,price,index}=product;
    return ( 
        <div className="card" key={index}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
            <div className="card-title">{name} </div>
            <div className="card-text">{`$ ${price/1000} USD`}</div>
            <button onClick={()=>addProductToCart(product)}  className="btn pink black">Add to Cart</button>
        </div>
    </div>

     );
}
const mapDispatchToProps= (dispatch)=>({
    addProductToCart:(product)=>dispatch(addProduct(product))
})
 
export default connect(null,mapDispatchToProps)(Card);