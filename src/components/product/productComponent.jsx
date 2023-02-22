import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishlist , removeFromWishlist } from '../../redux/wishlistSlice';
import { useDispatch , useSelector } from 'react-redux';
import {addToCart} from '../../redux/cartSlice';
import { useNavigate } from 'react-router';
import Rating from '@mui/material/Rating';
import './productComponent.css'

const ProductComponent = ({ item ,setElement , msgTime , setAddedTowishlist }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const list = useSelector( state => state.wishlistReducer.wishlist)
    const wishlistProducts = Array()
    list.map( list => wishlistProducts.push(list.item.id))

    const numberFormating = (number) => {
        return new Intl.NumberFormat('en-IN' ,{style : 'currency' , currency : 'USD', maximumSignificantDigits : 7}).format(number)
    }
    const  handelWishlist = (state) => {
        setAddedTowishlist(true)
        setElement(item)
        msgTime()
        if(state===false){
            dispatch(addToWishlist({item}))
        }
        else{
            dispatch(removeFromWishlist({item}))
        }
    }
    return ( 
            <div className="productComponentcontainer">
                        <div className='productCard'>
                        <img className='img' src={item.image} alt='img'></img>
                        <h4 className='title' onClick={() => navigate(`/${item.id}`)}>{item.title}</h4>
                        <Rating className='rating' name="read-only" value={item.rating.rate} readOnly/>
                        <div>
                            <div>
                                <AddShoppingCartIcon className='shopping-icon' onClick={() => {dispatch(addToCart({ item  })) 
                            setElement(item)
                            msgTime()}}/>
                                <FavoriteBorderIcon className ={`fav-icon${wishlistProducts.includes(item.id) ? '-activated' : ''}`} onClick={() => handelWishlist(wishlistProducts.includes(item.id)) }/>
                            </div>
                            <p className="price">{numberFormating(item.price)}</p>
                        </div>
                        </div>
            </div>
     );
}
 
export default ProductComponent;