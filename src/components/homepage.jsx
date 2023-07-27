import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ColorModeContext, tokens} from "../theme"
import portrait from './resources/portrait.jpg'
import './css/2homepage.scss'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const HomePage = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{paddingLeft: "3em", paddingRight: "33%", paddingTop:"12em", paddingBottom: "5em"}}>
            <Box display="flex">
                <div style={{ display: 'flex', justifyContent: 'left', padding: '0px 10px'}}>
                    <img src={portrait} alt="Image" style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid', borderColor: colors.primary[200], objectFit: 'cover' }} />
                </div>
                <Typography variant="h4" p="35px 50px" >
                    Welcome to my website! I'm currently a 1A software engineering student at the University of Waterloo.
                    <br/>
                    <br/>
                    Check out my <Typography component={Link} variant="h4" to='/portfolio'>portfolio</Typography> or <Typography component={Link} variant="h4" to='/resume'>resume</Typography> by
                    using the tabs above, and feel free to reach out by visiting my <Typography component={Link} variant="h4" to='/contact'>contact</Typography> page or directly 
                    at <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="mailto:ryan.nguyen@uwaterloo.ca">ryan.nguyen@uwaterloo.ca</a> if my experience interests you!
                </Typography>
            </Box>
            <br/>  
        </Box>
    )
}

export default HomePage