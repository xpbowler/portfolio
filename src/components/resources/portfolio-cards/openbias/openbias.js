import {Box, useTheme, Typography, IconButton} from '@mui/material'
import {ColorModeContext, tokens} from "../theme2"
import {useContext} from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const OpenBias = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return(
            <Box sx={{ flexGrow: 1, paddingLeft: "5%", paddingTop:"9em", width:'89%'}} >
                    <Typography variant="h4" p="10px 40px">
                        <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=y_Oe78iYdyE">Video Demo of OpenBias</a>
                        <IconButton>
                            <OpenInNewIcon onClick={()=> window.location='https://www.youtube.com/watch?v=y_Oe78iYdyE'}/>
                        </IconButton>
                    </Typography>
                    <Typography variant="h4" p="10px 40px">
                        <a style={{color: colors.primary[100]}} rel="noreferrer" target="_blank" href="https://devpost.com/software/tbd-xf4rki">Devpost</a>
                        <IconButton>
                            <OpenInNewIcon onClick={()=> window.location='https://devpost.com/software/tbd-xf4rki'}/>
                        </IconButton>
                    </Typography>
                    <Typography variant="h3" p="20px 40px">Description of OpenBias</Typography>
                    <Typography variant="h4" p="0px 40px" >
                        OpenBias consists of a Chrome Extension to vote on the political bias of websites and our own website that has the congregated data publicly available.
                        <br/>
                        OpenBias was made as part of a Hack The 6ix 2023 submission created by Ryan Nguyen and Kellen Sun.
                        <br/>
                        <br/>
                    </Typography>
                    <Typography variant="h3" p="20px 40px">Inspiration</Typography>
                    <Typography variant="h4" p="0px 40px" >
                        In 2023, Canada forced social media companies such as Meta to remove Canadians' ability to read news on their platform. Five years earlier, 70% of the CBC's revenue was from the government. Large news corporations own multiple journals and poorly write increasingly similar, biased, and uninteresting articles to promote a narrative.
                        In 2022, Elon Musk bought Twitter to restore free speech and added the prominent Community Notes feature which allows individuals to fact-check tweets and vote on them. Although the algorithms as to how Community Notes are generated is public, its inner workings are still difficult for the common man to understand.
                        OpenBias aims to change this.
                        <br/>
                        <br/>
                    </Typography>
                    <Typography variant="h3" p="20px 40px">What is OpenBias?</Typography>
                    <Typography variant="h4" p="0px 40px" >
                        OpenBias aims to tackle political bias transparently using a Chrome Extension. Users can open the extension on any webpage and vote on the political bias of the article. This was intended and works best for news articles. Currently the BiasMetric is only on a single left-right axis. All data collected is averaged and clearly displayed.
                        The algorithm employed is simple yet an effective application of one of mankind's greatest ideas, democracy. Each vote is equivalent.
                        <br/>
                        OpenBias also employs Google Cloud's Natural Language API to determine the political nature of articles. Certain articles are deemed not political in which case the ratings should be taken with a grain of salt.
                        <br/>
                        <br/>
                    </Typography>
                    <Typography variant="h3" p="20px 40px">What's Next?</Typography>
                    <Typography variant="h4" p="0px 40px" >
                        1. The large amount of data collected by OpenBias will be important to represent humanity's viewpoints on all issues and can be used as training data to align and reduce bias in large language models such as ChatGPT, which continue to become hugely influential on the public's viewpoint. This can be performed via reinforcement learning, for example. OpenBias' data can be used to develop an AI model able to predict the political bias of any text data, whether AI-generated or human-written.
                        <br/>
                        <br/>
                        2. We hope that OpenBias' ease of use will make it expand to a larger userbase. This will allow us to solidify the ratings we receive as more statistically significant and representative of the population at large.
                        <br/>
                        <br/>
                        3. OpenBias can also expand beyond the single dimension of left-right political biases, thus tackling more complicated issues in modern society.
                        <br/>
                        <br/>
                        4. To prevent fraud and mass bot spams, we will create simple CAPTCHA's to ensure ratings are done by humans.
                        <br/>
                        <br/>
                        5. This data can also be organized depending on publisher's. This will allow the ratings of individual news articles to be showcased within the broader context of a single publisher and tackle political and other biases within organizations, legacy media and social media influencers.
                        <br/>
                        <br/>
                        6. OpenBias can expand and become become a leading third-party "fact-checker" based on the opinions of everyone. Once OpenBias is deemed a trustworthy source, we may deliver stamps of approval to news corporations and social media posts to deem articles as unbiased and high quality.
                        <br/>
                    </Typography>
            </Box>
    )
}

export default OpenBias