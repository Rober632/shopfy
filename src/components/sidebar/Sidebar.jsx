import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useContext , useEffect , useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
import ToggleMode from './toggleMode';
import RangeSlider from './slider'
import './sidebar.css';


const Sidebar = ({value , setValue }) => {
    const {t,i18n} = useTranslation()
    const themeContext = useContext(ThemeContext)
    const setLanguage = themeContext.setLanguage
    const language = themeContext.language
    useEffect(()=> {
        i18n.changeLanguage(language)  
    },[language])
    const toggleLanguage = (lg) => {
        setLanguage(lg)
    }
    const [ changeLanguage, setChangeLanguage ] = useState(false)
    return ( 
        <div className="sidebar">
            <div className="logo">
                <span className='logo-text'> Shopfy</span>
            </div>
            
            <div className="sidebar-options">
                <div className="filter">
                    <span className="header">{t("Filter")}</span>
                    <p className="options-price">{t("Price Range")}</p>
                    <div className="slider">
                        <RangeSlider value = {value} setValue = {setValue}/>   
                        <button onClick={()=> setValue([0,2000])}> {t("Reset")}</button>  
                    </div>
                </div>

                <div className="account">
                    <span className="header">{t("Account")}</span>
                    <p className="options">{t("Profile")}</p>
                    <p className="options">{t("Orders")}</p>
                    <Link to={'/wishlist'} className="options">{t("Wishlist")}</Link>
                </div>

                <div className="settings">
                    <span className="header">{t("Settings")}</span>
                    <p className="options-language" onClick={() => setChangeLanguage(!changeLanguage)}>{t("Language")} {(changeLanguage === false) ?<KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }</p>
                    {changeLanguage && <div className='languages'> 
                        <span className="language" onClick={() => toggleLanguage('en')}>{t("English")}</span>
                        <span className='language'onClick={() => toggleLanguage('ar')}>{t("Arabic")}</span>
                        </div> } 
                    <p className="options">{t("Country")}</p>
                    
                </div>

                <div className="modeToggle">
                <span className="header">{t("Theme")}</span>
                    <ToggleMode t={t}/>
                </div>

                <div className="support">
                    <span className="header">{t("Support")}</span>
                    <p className="options">{t("Help")}</p>
                    <p className="options">{t("Contact US")}</p>
                </div>
            </div>

        </div>
     );
}

 
export default Sidebar;