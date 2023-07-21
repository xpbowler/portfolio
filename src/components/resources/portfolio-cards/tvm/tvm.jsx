import {Box, useTheme, Typography} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'

const TVM = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{ flexGrow: 1, paddingLeft: "3em", paddingRight: "3em", paddingTop:"9em"}}>
                <Typography variant="h2" p="20px 40px">Background</Typography>
                <Typography variant="h4" p="0px 40px" style={{width:'80%'}}>
                    Under construction...
                </Typography>
        </Box>
    )
}

export default TVM