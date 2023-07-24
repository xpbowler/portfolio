import {Box,useTheme} from '@mui/material'
import {useContext} from 'react'
import {ColorModeContext, tokens} from "../theme"
import rnresume from './resources/resume.pdf'

const Resume = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return(
        <Box p={3}>
            <div style={{display: 'flex', justifyContent: 'center', padding: '90px 0px'}}>
                <iframe src={rnresume} frameborder="0" style={{width:'60%' , height:'1100px'}}/>
            </div>
        </Box>
    )
}

export default Resume