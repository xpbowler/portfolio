import {Box, IconButton,useTheme, Typography, Tab, Tabs, AppBar, Toolbar} from '@mui/material'
import React, {useContext} from 'react'
import {ColorModeContext, tokens} from "../theme"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => { setValue(newValue) };
    
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box >
            <AppBar position="fixed" style={{background: colors.primary[500], paddingTop: '8px', paddingBottom: '8px'}}>
                <Toolbar>
                    <Typography variant="h2" sx={{color: colors.grey[100], fontWeight: '500'}}>
                        <span>Ryan Nguyen</span>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab value='/' sx={{textTransform:'capitalize'}} label={(<Typography variant="h5">Home</Typography>)} component={Link} to='/' />
                        <Tab value='/portfolio' sx={{textTransform:'capitalize'}} label={(<Typography variant="h5">Portfolio</Typography>)} component={Link} to='/portfolio'/>
                        <Tab value='/resume' sx={{textTransform:'capitalize'}} label={(<Typography variant="h5">Resume</Typography>)} component={Link} to='/resume'/>
                        <Tab value='/contact' sx={{textTransform:'capitalize', marginRight:'10px'}} label={(<Typography variant="h5">Contact</Typography>)} component={Link} to='/contact'/>
                    </Tabs>
                    <IconButton onClick={colorMode.toggleColorMode} sx={{marginRight:'5px'}}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlinedIcon style={{width:'25px', height:'auto'}}/>
                        ) : (
                            <LightModeOutlinedIcon style={{width:'25px', height:'auto'}}/>
                        )}
                    </IconButton>
                </Toolbar>
                
            </AppBar>
        </Box>
    )
}

export default Navbar