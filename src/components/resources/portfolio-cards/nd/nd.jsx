import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import rProcess from './r_process.png'
import cnnDimensions from './cnn_dimensions.png'

const ND = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{ flexGrow: 1, paddingLeft: "5%", paddingTop:"9em", width:'82%'}}>
                <Typography variant="h4" p="10px 40px">
                    <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://youtu.be/760QNJhCh3k">Video Demo of NeuroDetect</a>
                    <IconButton>
                        <OpenInNewIcon onClick={()=> window.location='https://youtu.be/760QNJhCh3k'}/>
                    </IconButton>
                </Typography>
                <Typography variant="h3" p="20px 40px">Background</Typography>
                <Typography variant="h4" p="0px 40px" >
                    As a patient develops cancer, their gene expression pattern changes in a characteristic way that can be quantified by sequencing their RNA, yielding a numerical expression 
                    value for every gene. Thus, we developed a convolutional neural network able to predict whether a patient's RNA-seq data is likely to be representative of cancer tissue. 
                    This cost-effective, non-invasive diagnosis method aims to increase the success rate of early cancer detection.
                    <br/>
                    <br/>
                </Typography>
                <Typography variant="h3" p="20px 40px">About</Typography>
                <Typography variant="h4" p="0px 40px" >
                The CNN was trained with Tensorflow based on patient RNA-seq data transformed into 2D images suitable for the CNN's convolutional layer. It contains 2.4M parameters, achieves a 98.7% 
                prediction accuracy, and is able to classify 4 types of cancer: breast, lung, kidney, and uterine cancer. A step of the RNA-seq data preprocessing stage (left) and the CNN model
                summary are shown below (right): 
                    <br/>
                    <br/>
                    <br/>
                    <img src={rProcess} style={{width: "800px", height: "auto"}}/><img src={cnnDimensions} style={{width: "550px", height: "auto", paddingLeft:'55px'}}/>
                    <br/>
                    <br/>
                </Typography>
                <Typography variant="h3" p="20px 40px">How to use it</Typography>
                <Typography variant="h4" p="0px 40px" >
                    NeuroDetect takes a 2D image transformed from RNA-seq data as the input. Under the the 'c-images' folder found in this project's GitHub, the test and train data can be found. 
                    There are 8 classes of tissue the CNN is able to differentiate: 
                    <br/>
                    <br/>
                    - Breast Normal Tissue (BRCA.N)
                    <br/>
                    - Breast Invasive Carcinoma (BRCA.T)
                    <br/>
                    - Kidney Renal Normal Tissue (KIRC.N)
                    <br/>
                    - Kidney Renal Clear Cell Carcinoma (KIRC.T)
                    <br/>
                    - Lung Normal Tissue (LUAD.N)
                    <br/>
                    - Lung Adenocarcinoma (LUAD.T)
                    <br/>
                    - Uterine Corpus Endometrial Normal Tissue (UCEC.N)
                    <br/>
                    - Uterine Corpus Endometrial Carcinoma (UCEC.T)
                    <br/>
                    <br/>
                    To test out NeuroDetect, input a file from any of the 8 categories under test data, which the CNN has never seen before. 
                    <br/>
                    <br/>
                    <br/>
                </Typography>
                <Typography variant="h3" p="20px 40px">Installation</Typography>
                <Typography variant="h4" p="0px 40px" >
                    The installation instructions can be found in the project GitHub README.md. 
                    <br/>
                    <br/>
                </Typography>
        </Box>
    )
}

export default ND