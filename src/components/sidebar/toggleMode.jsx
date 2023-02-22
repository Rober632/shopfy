import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../App';

const ToggleMode = ({t}) => {
    const themeContext = React.useContext(ThemeContext)
    const theme = themeContext.theme
    const toggleTheme = themeContext.toggleTheme
    return ( 
        <Box className='mode'
        sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
        }}
        >
        {t(`${theme} mode`)}
        <IconButton sx={{ ml: 1 }} onClick={() => toggleTheme()} color="inherit">
         {theme == 'Light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    </Box>
     );
}
 
export default ToggleMode;