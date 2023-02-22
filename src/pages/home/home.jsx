
import ProductComponent from "../../components/product/productComponent";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from "react-i18next";
import Skeleton from '@mui/material/Skeleton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import uuid from 'react-uuid';
import { useState } from "react";
import './home.css'


const Home = ({products , isLoading , setFilter}) => {
    const { t } = useTranslation()
    const [search , setSearch] = useState('')
    const [value, setValue] = useState([0, 2000]);
    const [element , setElement] = useState(null)
    const [addedToWishlist , setAddedTowishlist] = useState(false)
    const [inWishlist , setInwishlist] = useState(null)
    products = products.filter(item =>  item.title.toLowerCase().includes(search.toLowerCase()) && value[0] < item.price && item.price < value[1])
    const counter = Array(20).fill(1)
    function msgTime(){ setTimeout(() => {
        setElement(null)
        setAddedTowishlist(null)
      }, 3000)}
        return(
            <div className='home'>
                <Sidebar  value = {value} setValue = {setValue}/>
                <div className="Homecontainer">
                    <Navbar className='navbar' search={search} setSearch={setSearch}/>
                    <h1>{t('Home')}</h1>
                    <div className="filter">
                        <FormControl className='filterControl' sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">{t("Sort by")}</InputLabel>
                            <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Sort by"
                            >
                            <MenuItem onClick={() => setFilter(1)}>{t("Low to High")}</MenuItem>
                            <MenuItem onClick={() => setFilter(2)}>{t("High to Low")}</MenuItem>
                            <MenuItem onClick={() => setFilter(null)}>{t("Reset")}</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="productItemContainer">
                        <div className="productItem">
                            
                            {(!isLoading) ?
                            products && products.map(item => (
                                <ProductComponent key={item.id} item={item} setElement={setElement} msgTime={msgTime} setAddedTowishlist = {setAddedTowishlist} setInwishlist ={setInwishlist}/>
                                )) : <>
                                {counter.map(x=>  <Skeleton key={uuid()} variant="rounded" width={250} height={250} /> ) }
                                </>}
                        </div> 
                    </div>
                    {element && !addedToWishlist && <p className='msg'><img src={element.image} className='msg-img' alt='img'></img>{t("item has been added to your Cart")}</p>      }           
                    {element && addedToWishlist && <p className='msg'><img src={element.image} className='msg-img' alt='img'></img>{t("item has been added to your Wishlist")}</p>      }   

                </div>
            </div>
        )
}
 
export default Home;