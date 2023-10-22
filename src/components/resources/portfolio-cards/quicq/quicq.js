import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const QuicQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
            <Box sx={{ flexGrow: 1, paddingLeft: "5%", paddingTop:"9em", width:'89%'}} >
            </Box>
    )
}

export default QuicQ