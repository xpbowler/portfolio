import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ColorModeContext, tokens} from "../theme"
import './css/2homepage.scss'
import './css/3homepage.css'
import Typed from 'react-typed'


const HomePage = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{paddingLeft: "3em", paddingRight: "10%", paddingTop:"15em", paddingBottom: "5em"}}>
            <div className='title-container'>
                <h3 className='subtitle'>Hello, I'm Ryan.</h3>
                <h1 className='title'>
                I love {` `}
                <span className='typed'>
                    <Typed 
                    strings={['backend dev','game dev','immunology']}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                    />
                </span>
                </h1>
                <Typography variant="h4" p="0px 0px " sx={{color: colors.primary[200], width: '70%'}}>
                    Currently a 1A software engineering student at the University of Waterloo.
                    <br/>
                    <br/>
                    {/*
                    Feel free to reach out at <a style={{color: colors.accent[200]}} rel="noreferrer" target="_blank" href="mailto:ryan.nguyen@uwaterloo.ca">ryan.nguyen@uwaterloo.ca</a> {` `}
                    if my experience interests you!
                    */}
                </Typography>
            </div>
        </Box>
    )
}

export default HomePage