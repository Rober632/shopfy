import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux/cartSlice';
import {removeFromWishlist} from '../../redux/wishlistSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import './wishlistComponent.css'



const WishlistComponent = ({item , quantity , id}) => {
    const dispatch = useDispatch()
    const numberFormating = (number) =>{
        return new Intl.NumberFormat('en-IN' ,{style : 'currency' , currency : 'USD', maximumSignificantDigits : 6}).format(number)
    }

    return ( 
            <div className="container">
                <div className='wishlistCard'>
                    <img className='img' src={item.image} alt='img'></img>
                    <div className='info'>
                        <h5 className='title'>{item.title}</h5>
                        <Rating className='rating' name="read-only" value={item.rating.rate} readOnly/>
                    </div>
                    <div className="price">
                        <p>Price</p>
                        <span> {numberFormating(item.price)}</span>
                    </div>
                    <div className="icons">
                            <AddShoppingCartIcon className='shopping-icon' onClick={() => {dispatch(addToCart({ item }))}}/>
                            <DeleteIcon className='delete-icon' onClick={() => {dispatch(removeFromWishlist({ item }))}}/> 
                        </div>
                </div>
                    
            </div>
     );
}
 
export default WishlistComponent;