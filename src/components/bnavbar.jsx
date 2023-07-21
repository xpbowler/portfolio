import {Box, IconButton,useTheme, Typography, Tab, Tabs, AppBar, Toolbar} from '@mui/material'
import React, {useContext} from 'react'
import {ColorModeContext, tokens} from "../theme"
import {Link} from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Bnavbar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => { setValue(newValue) };
    
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{paddingTop:'120px'}}>
            <Box backgroundColor={colors.primary[600]} sx={{position:'static', bottom:'0px', width:'100%',paddingTop:'30px', paddingBottom: '0px'}} display="flex" alignItems="center" justifyContent="center">
                <div style={{padding: '0px 50px'}}>
                    <Typography variant="h5" sx={{fontWeight: 600}}>LINKS</Typography>
                    <br/>
                    <Typography variant="h6" >
                        Github 
                        <IconButton onClick={()=> window.location="https://github.com/xpbowler"}>
                            <GitHubIcon style={{width:'20px', height:'auto'}}/>
                        </IconButton>
                    </Typography>
                    <Typography variant="h6" >
                        LinkedIn
                        <IconButton onClick={()=> window.location="https://www.linkedin.com/in/ryan-nguyen-0aa676218/"}>
                            <LinkedInIcon style={{width:'20px', height:'auto'}}/>
                        </IconButton>
                    </Typography>
                </div>
                <div style={{ padding: '0px 50px'}}>
                    <Typography variant="h5" sx={{fontWeight: 600}}>ABOUT</Typography>
                    <br/>
                    <Typography variant="h6" >
                         Contact
                         <IconButton onClick={()=> window.location="/contact"}> 
                            <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                         </IconButton>
                    </Typography>
                    <Typography variant="h6" >
                        Acknowledgments
                        <IconButton onClick={()=> window.location="/acknowledgments"}> 
                            <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                         </IconButton>
                    </Typography>
                </div>
                <div style={{padding: '0px 50px'}} >
                    <Typography variant="h5" sx={{fontWeight: 600}}>WEBRING</Typography>
                    <br/>
                    <Typography variant="h6" >
                        SE Webring
                        <IconButton onClick={()=> window.location="https://se-webring.xyz/"}> 
                            <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                         </IconButton>
                    </Typography>
                    <Typography variant="h6" >
                        Source code
                        <IconButton onClick={()=> window.location="https://github.com/xpbowler/portfolio"}>
                            <GitHubIcon style={{width:'20px', height:'auto'}}/>
                        </IconButton>
                    </Typography>
                </div>
            </Box>
            <Box backgroundColor={colors.primary[600]} sx={{position:'static', bottom:'0px', width:'100%',paddingTop:'40px', paddingBottom: '25px'}} display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h6" >
                    © 2023 ::  Ryan Nguyen :: University of Waterloo
                </Typography>
            </Box>
        </Box>
    )
}

export default Bnavbar