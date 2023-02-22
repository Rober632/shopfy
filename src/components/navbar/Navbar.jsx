import './navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import profile from '../img/profile.jpeg'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Navbar = ({search , setSearch}) => {
    const cart = useSelector((state) => state.cartReducer.cart)
    const { t } = useTranslation()
    return ( 
        <div className="navbar">
            <Link to='/home' className='home-btn'> {t("Home")} </Link>
            <div className="search">
                <input className='searchbar' type='search' onChange={(e)=>setSearch(e.target.value)}></input>
                <SearchIcon className='search-icon'/>
            </div>
            <div className="navbar-options">

                <div className="notif">
                    <span className='shopping-notification'>{cart.length}</span>
                    <Link to='/cart'><ShoppingCartOutlinedIcon className='shopping-icon'/ ></Link>

                </div>
                <img src={profile} alt="profile" className="profile-img"></img>

                <Select className='arrow' sx={{ ml:-1 ,p:0 ,boxShadow : 'none', '.MuiOutlinedInput-notchedOutline': { border: 0  },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent'}}}>
                    <MenuItem  ><Link to='/account' className='link'>Account</Link></MenuItem>
                    <MenuItem ><Link to='/settings' className='link'>Settings</Link></MenuItem>
                </Select>
            </div>
        </div>
     );
}
 
export default Navbar;
