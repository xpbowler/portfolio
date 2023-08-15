import {Box, useTheme, Typography} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'
import tvmdoc from './tvmdoc.pdf'

const TVM = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
        <Box sx={{ flexGrow: 1, paddingLeft: "3em", paddingRight: "3em", paddingTop:"9em"}}>
                <Typography variant="h3" p="20px 40px">Background</Typography>
                <Typography variant="h4" p="0px 40px" >
                Memory-phenotype CD8+ T cells exist even within hosts that have not been exposed to foreign antigen (e.g., in human cord blood). Classically, 
                memory CD8+ T cells (TMEM) result from antigen-specific interactions, but immunological memory can also be achieved through antigen-inexperienced 
                memory-phenotype T cells — virtual memory CD8+ T cells (TVM). TVM arise in the periphery from naive CD8+ T cells and are driven by homeostatic 
                cytokines. They partially resemble classical TMEM with their ability to rapidly mount an immune response upon antigen stimulation. 
                Putative human TVM express NK and TMEM markers (EOMES, NKG2A, KIR3DL1) and are phenotypically defined as [CD45RA+CD27-EOMES+NKG2A+panKIR+].
                It has been shown that TVM are largely depend on IL-15 and IL-4 for differentiation, expansion, and survival. Ablation of IL-15 production 
                or IL-15 signaling completely inhibits TVM differentiation and survival. BATF-3 dependent dendritic cells (DC) have been shown to be the predominant
                 producers of IL-15 in the steady state, and BATF-3 deficient mice had a severely impaired TVM population. TVM differentiation in IL-15 deficient mice 
                 can be rescued by injecting IL-15/IL-15RA complexes. Ablation of IL-4 is also known to compromise the TVM population, indicating their dependence on
                 IL-4.However, this cytokine dependency has mainly been shown in mice. Whether IL-15 and/or IL-4 directly contributes to TVM differentiation in 
                 humans is to be determined.
                <br/><br/>
                </Typography>
                <Typography variant="h3" p="20px 40px">Thesis</Typography>
                <Typography variant="h4" p="0px 40px" >
                Treatment of bulk CD8+ naive T cells with IL-15 and/or IL-4 in vitro will convert them into [CD45RA+CD27-EOMES+panKIR+] 
                antigen-inexperienced memory CD8+ T cells.
                <br/><br/>
                </Typography>
                <Typography variant="h3" p="20px 40px">Rationale</Typography>
                <Typography variant="h4" p="0px 40px" >
                It has been shown that CD45RA+CD27-panKIR+ TVM cells accumulate in patients with human immunodeficiency virus (HIV). 
                They are positively correlated with IL-15 and IFN-y serum concentrations.9 However, there is still no clear evidence for cytokine-induced activation of TVM 
                in human infectious diseases. TVM are also inversely correlated with latent HIV viral load and have been demonstrated to play a protective role in influenza,
                helminth infections, and other chronic infections.10,11,12 
                <br/><br/>
                A putative TVM equivalent population in humans has been defined. Given that human TVM have a similar responsiveness to antigen stimulation and 
                phenotype to mouse TVM, and that they are positively correlated with IL-15 serum levels in patients with chronic infections, it is plausible 
                that IL-15 mediates the expansion/differentiation of human TVM cells as well.1,2,9 
                <br/><br/><br/><br/>
                </Typography>
                <Box p={3}>
                    <div style={{display: 'flex', justifyContent: 'center', padding: '90px 0px'}}>
                        <iframe src={tvmdoc} frameborder="0" style={{width:'70%' , height:'1100px'}}/>
                    </div>
                </Box>
        </Box>
    )
}

export default TVM