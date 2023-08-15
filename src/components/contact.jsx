import {Box,useTheme, Typography, IconButton} from '@mui/material'
import {tokens} from "../theme"
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Emailform from './emailform'
import portrait from './resources/portrait.jpg'


const Resume = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return(
        <Box sx={{paddingLeft: '30%', paddingTop: '9em'}}>
            <div style={{paddingLeft: '17%', paddingBottom: '5rem'}}>
                <img src={portrait} alt="Image" style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid', borderColor: colors.primary[200], objectFit: 'cover'}} />
            </div>            
                <Typography variant="h2">
                        Contact
                </Typography>
                <br/>
                <Typography variant="h4">
                    <IconButton><EmailIcon/></IconButton> The fastest way to contact me is via email 
                    at <a style={{color: colors.grey[100]}} rel="noreferrer" target="_blank" href="mailto:ryan.nguyen@uwaterloo.ca">ryan.nguyen@uwaterloo.ca</a>
                    <br/>
                </Typography>
                <Emailform/>
        </Box>
    )
}

export default Resume