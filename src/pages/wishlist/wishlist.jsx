import WishlistComponent from '../../components/wishlist/wishlistComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './wishlist.css'


const Wishlist = () => {

    const wishlist = useSelector((state) => state.wishlistReducer.wishlist)
    const { t } = useTranslation()
     
    return ( 
            <div className='wishlist'>
                <Sidebar/>
                <div className="page">
                    <Navbar/>
                    {(wishlist.length ===0) ? 
                        <div className="container2">
                            <h1>{t("Your Wishlist is Empty")}</h1>
                            <p>{t("Tap heart button to start saving your favourite items.")}</p>
                            <Link to='/home' className='link'>{t("Add Now")}</Link>
                        </div>
                    :
                        <div className="container">
                            <div className="heading">
                            <FavoriteBorderIcon className='fav-icon'/> <h1>  My Wishlist</h1>
                            </div>
                            <div className="content">
                                <div className='itemsContainer'>

                                    <div className='cartItems'>
                                        {wishlist.map(item => 
                                        <WishlistComponent key={item.item.id} item={item.item} id = {item.item.id} quantity = {item.quantity} />
                                        )}    
                                    </div>

                                    <div className="items">
                                        <p>{wishlist.length} Items</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    }           
                </div>       
            </div>
    );
}
export default Wishlist;