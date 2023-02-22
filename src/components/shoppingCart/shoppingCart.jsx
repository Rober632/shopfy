import { decrementQuantity, incrementQuantity, removeItem } from '../../redux/cartSlice';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './shoppingCart.css'
import { addToWishlist } from '../../redux/wishlistSlice';

const ShoppingCart = ({item , quantity , id}) => {
    const numberFormating = (number) =>{
        return new Intl.NumberFormat('en-IN' ,{style : 'currency' , currency : 'USD', maximumSignificantDigits : 6}).format(number)
    }
    const dispatch = useDispatch()
    return ( 
            <div className="container">
                <div className='shoppingCartCard'>
                    <img className='img' src={item.image} alt='img'></img>
                    <div className='info'>
                        <h6 className='title'>{item.title}</h6>
                        <Rating className='rating' name="read-only" value={item.rating.rate} readOnly/>
                    </div>
                    <div className="price">
                        <p>Each</p>
                        <span> {numberFormating(item.price)}</span>
                    </div>
                    <div className="quantity">
                        <p>Quantity</p>
                        <div className="wrapper">
                                <span className="minus" onClick={  () => {dispatch(  decrementQuantity({ id  })  )  }}>-</span>
                                <span className="num">{quantity}</span>
                                <span className="plus" onClick={  () => {dispatch(  incrementQuantity({ id  })  )  }}>+</span>
                        </div>
                    </div>
                    <div className='last'>
                        <div className="finalPrice">
                            <p>Total</p>
                            <span className="price">{numberFormating(item.price * quantity)} </span>
                        </div>
                    </div>
                    <div className="icons">
                            <FavoriteIcon onClick={() => { dispatch (removeItem ({ id }) ) 
                                                            dispatch(addToWishlist ({item}))}
                                                        } className='favorite-icon'/>
                            <DeleteIcon className='delete-icon' onClick={() => {dispatch(removeItem({ id }))}}/> 
                        </div>
                </div>
                    
            </div>
     );
}
 
export default ShoppingCart;