import {Box, useTheme, Typography} from '@mui/material'
import {useContext} from 'react'
import {ColorModeContext, tokens} from "../theme"
import portrait from './resources/portrait.jpeg'
import './2homepage.scss'

const HomePage = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{paddingLeft: "3em", paddingRight: "3em", paddingTop:"9em"}}>
            <Box display="flex">
                <div style={{ display: 'flex', justifyContent: 'left', padding: '0px 10px'}}>
                    <img src={portrait} alt="Image" style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid #FFFFFF', objectFit: 'cover' }} />
                </div>
                <Typography variant="h4" p="5px 40px" sx={{color: colors.primary[100]}}>
                    <br/>
                    Welcome to my website! I'm currently an undergraduate student at the University of Waterloo pursuing a B.E. in Software Engineering. 
                    <br/>
                    <br/>
                    I believe AI has the ability to advance the field of medicine in unprecedented ways. 
                </Typography>
            </Box>
            <br/>  
        </Box>
    )
}

export default HomePage