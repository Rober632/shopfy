import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCart from '../../components/shoppingCart/shoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useTranslation } from 'react-i18next';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


import './cart.css'




const Cart = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const numberFormating = (number) =>{
        return new Intl.NumberFormat('en-IN' ,{style : 'currency' , currency : 'USD', maximumSignificantDigits : 6}).format(number)
    }
    const cart = useSelector((state) => state.cartReducer.cart)
    var checkoutPrice = 0;
        cart.map((item) =>  {
            return checkoutPrice += ((item.quantity === 0) ? 0 : item.quantity * item.item.price)
        })
        checkoutPrice = numberFormating(checkoutPrice)
    return ( 
    <>
            <div className='cart'>
                <Sidebar/>
                <div className="page">
                    <Navbar/>
                    <div className="container">
                        <div className="heading">
                        <ShoppingCartOutlinedIcon className='cart-icon'/> <h1>  {t("My Cart")}</h1>
                        </div>
                        <div className="content">
                            <div className='itemsContainer'>
                                {(cart.length===0) ? 
                                <div className="empty">
                                    <h1> {t("Your Cart is Currently Empty!")}</h1>
                                    <p>{t("Looks like you haven't added anything to your cart yet")}</p>
                                    <Link to='/home' className='link'>{t("Continue Shopping")}</Link>
                                </div>
                                :
                                <>
                                <div className='cartItems'>
                                    {cart.map(item => 
                                    <ShoppingCart key={item.item.id} item={item.item} id = {item.item.id} quantity = {item.quantity} />
                                    )}    
                                </div>
                                <div className="items">
                                    <p>{cart.length} Items</p> <p>{checkoutPrice}</p>  
                                </div>
                                </>
                                }
                            </div>
                            <div className="checkout">
                                <div className="checkout1">
                                    <label>{t("ENTER PROMO CODE")}</label>
                                    <div>
                                    <input type='text' placeholder={t("Promo Code")}/>
                                    <button > {t("Sumbit")} </button>
                                    </div>
                                    <div>
                                        <p>{t("Shipping cost")}</p>
                                        <p>$0</p>
                                    </div>
                                    <div>
                                        <p>{t("Discount")}</p>
                                        <p>$0</p>
                                    </div>
                                    <div>
                                        <p>{t("Tax")}</p>
                                        <p>$0</p>
                                    </div>
                                    <div>
                                        <span>{t("Estimated Total")}</span>
                                        <span>{checkoutPrice}</span>
                                    </div>
                                </div>
                                <div className="checkout2" id="2">
                                    <button disabled={checkoutPrice===0 ? true : false} onClick={() => navigate('/checkout')}><LockIcon className='lock-icon' /> {t("Checkout")}</button>
                                </div>
                            </div>

                        </div>
                    </div>           
                </div>
                
            </div>
    </>
    );
    }

export default Cart;