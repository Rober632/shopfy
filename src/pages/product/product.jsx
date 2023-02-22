import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishlist } from "../../redux/wishlistSlice";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {addToCart} from '../../redux/cartSlice';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import './product.css'




const Product = ({products }) => {
    const { t } = useTranslation();
    const { id } = useParams();
    const dispatch = useDispatch()
    const [added , setAdded] = useState(false)
    const [wished , setWished ] = useState(false)
    const item = products.find((items) => items.id == id)

    const msgTime = setTimeout(() => {
        setAdded(false)
        setWished(false)
      }, 3000)

    const handelAdd = () => {
        setAdded(true)
        dispatch(  addToCart({ item  })  )
        msgTime()
    }
        return (
            <div className="product">
                <Sidebar/>
                <div className="container">
                    <Navbar className='navbar'/>
                    {(item) ? 
                    <div className="itemContainer">   
                        <img className='img' src={item?.image} alt='img' ></img>
                        <div className='infoContainer'>
                            <h2>{item?.title}</h2>    
                            <Rating className='rating' name="read-only" value={item?.rating.rate} readOnly/>
                            <p className="description">{item?.description}</p>
                            <p className="price">${item?.price}</p>
                            <div className='buttons'>
                                <button onClick={  () => handelAdd()}
                                className='add'>{t('Add to cart')} <AddShoppingCartIcon className='shoppingIcon'/> 
                                </button>
                                <FavoriteBorderIcon className='favorite-icon' onClick={() => {dispatch(addToWishlist({item})) 
                                setWished(true)}}/>
                            </div>
                        </div>
                    </div>
                    : <div id="loader"></div>
}
                    {added && <p className='msg'><img src={item.image} className='msg-img' alt='img'></img>item has been added to your Cart</p>      }  
                    {wished && <p className='msg'><img src={item.image} className='msg-img' alt='img'></img>item has been added to your WishList</p>      }           
                </div>
            </div>
        )
}
 
export default Product;