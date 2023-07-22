import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {useContext} from 'react'
import {ColorModeContext, tokens} from "../theme"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Acknowledgments = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box sx={{paddingLeft: "33%", paddingRight: "25%", paddingTop:"10em" }} >
            <Typography variant="h2">Acknowledgments</Typography>
            <br/>
            <br/>
            <Typography variant="h4">
                This website uses the <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://react.dev/">ReactJS</a> library
                <IconButton onClick={()=> window.location="https://react.dev/"}> 
                    <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                </IconButton>
            </Typography>
            <br/>
            <Typography variant="h4">
                This website uses icons from <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://mui.com/material-ui/material-icons/">Material UI</a>
                <IconButton onClick={()=> window.location="https://mui.com/material-ui/material-icons/"}> 
                    <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                </IconButton>,
                a React component library licensed under the <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://www.tldrlegal.com/license/mit-license">MIT license</a>
                <IconButton onClick={()=> window.location="https://www.tldrlegal.com/license/mit-license"}> 
                    <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                </IconButton>
            </Typography>
            <br/>
            <Typography variant="h4">
                The website favicon is adapted from the University of Waterloo's <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://se-webring.xyz/">SE Webring</a>
                <IconButton onClick={()=> window.location="https://se-webring.xyz/"}> 
                    <OpenInNewIcon style={{width:'20px', height:'auto'}}/>
                </IconButton>,
                a personal website hub for Software Engineering students at UW.
            </Typography>
        </Box>
    )
}

export default Acknowledgments