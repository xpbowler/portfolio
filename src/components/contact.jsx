import {Box,useTheme, Typography, IconButton} from '@mui/material'
import {tokens} from "../theme"
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Emailform from './emailform'


const Resume = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return(
        <Box sx={{paddingLeft: '33%', paddingTop: '7%'}}>
            <Typography variant="h2" >
                Contact
            </Typography>
            <br/>
            <Typography variant="h4">
                Feel free to contact me at<IconButton><EmailIcon/></IconButton>
                <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="mailto:ryan.nguyen@uwaterloo.ca">ryan.nguyen@uwaterloo.ca</a>
                <br/>
                <br/>
                You can also visit me on <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://github.com/xpbowler">GitHub</a>
                <IconButton>
                    <OpenInNewIcon onClick={()=> window.location='https://github.com/xpbowler'}/>
                </IconButton>
            </Typography>
            <Emailform/>
        </Box>
    )
}

export default Resume