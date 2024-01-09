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
                I love working on {` `}
                <span className='typed'>
                    <Typed 
                    strings={['ML applications', 'game-dev projects']}
                    typeSpeed={35}
                    backSpeed={50}
                    loop
                    />
                </span>
                </h1>
                <Typography variant="h4" p="0px 0px " sx={{color: colors.primary[200], width: '70%'}}>
                    Currently a 1A software engineering student at the University of Waterloo.
                    <br/>
                    <br/>
                    Check out my projects <a style={{color: colors.primary[100], fontWeight: 500}} rel="noreferrer" href="/portfolio">here</a>!
                </Typography>
            </div>
        </Box>
    )
}

export default HomePage