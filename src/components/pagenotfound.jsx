import {Box, useTheme, Typography, Button} from '@mui/material'
import {useContext} from 'react'
import {ColorModeContext, tokens} from "../theme"

const PageNotFound = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box sx={{paddingLeft: "33%", paddingRight: "25%", paddingTop:"14em" }} >
            <Typography variant="h1">404 Error</Typography>
            <br/>
            <br/>
            <Typography variant="h4">
                The page you are looking for does not exist.
            </Typography>
            <br/>
            <br/>
            <Button
                variant="contained"
                onClick={() => window.location='/'}
                color="secondary"
                sx={{width:'180px', height:'60px', textTransform:'capitalize'}}
            >
                <Typography variant="h4" sx={{fontWeight:550}}>Go Home</Typography>
            </Button>
        </Box>
    )
}

export default PageNotFound