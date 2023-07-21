import {Box, useTheme, Typography} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'

const ND = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{ flexGrow: 1, paddingLeft: "3em", paddingRight: "3em", paddingTop:"9em"}}>
                <Typography variant="h2" p="20px 40px">Background</Typography>
                <Typography variant="h4" p="0px 40px" style={{width:'80%'}}>
                    As a patient develops cancer, their gene expression pattern changes in a characteristic way that can be quantified by sequencing their RNA, yielding a numerical expression 
                    value for every gene. Thus, we developed a convolutional neural network able to predict whether a patient's RNA-seq data is likely to be representative of cancer tissue. 
                    This cost-effective, non-invasive diagnosis method aims to increase the success rate of early cancer detection.
                    <br/>
                    <br/>
                    More details on the way...
                </Typography>
        </Box>
    )
}

export default ND