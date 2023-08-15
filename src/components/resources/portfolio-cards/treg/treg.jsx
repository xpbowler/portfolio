import {Box, useTheme, Typography} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'
import tregPoster from './treg-poster.pdf'
import tregWord from './treg-word.pdf'

const TREG = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{ flexGrow: 1, paddingLeft: "3em", paddingRight: "3em", paddingTop:"9em"}}>
                <Typography variant="h3" p="20px 40px">This research project ranked 10th out of 570 projects in the 2021 IgNITE Undergraduate Medical Case 
                Competition (<a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://doi.org/10.26685/urncst.353">doi.org/10.26685/urncst.353</a>)</Typography>
                <Box p={3}>
                    <div style={{display: 'flex', justifyContent: 'center', padding: '20px 0px'}}>
                        <iframe src={tregPoster} frameborder="0" style={{width:'70%' , height:'620px'}}/>
                    </div>
                </Box>
                <Box p={3}>
                    <div style={{display: 'flex', justifyContent: 'center', padding: '0px 0px'}}>
                        <iframe src={tregWord} frameborder="0" style={{width:'70%' , height:'1100px'}}/>
                    </div>
                </Box>
        </Box>
    )
}

export default TREG