import {Box, useTheme, Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, IconButton} from '@mui/material'
import React, {Component} from 'react'
import portfoliodata from './resources/portfoliodata.json'
import GitHubIcon from '@mui/icons-material/GitHub';
import './portfolio.css'
import {Link} from 'react-router-dom'

const Thing = props => (
  <Card sx={{ maxWidth: 575 }}>
    <CardMedia
      sx={{ height: 250 }}
      image={require(`./resources/portfolio-cards/${props.thing.id}/${props.thing.id}-image.jpg`)}
      title={props.thing.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h3" component="div">
        {props.thing.title}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        {props.thing.description}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton onClick={()=> window.location=`${props.thing.github}`}>
        <GitHubIcon style={{width:'30px', height:'auto'}}/>
      </IconButton>
      <Button size="small" component={Link} to={`/portfolio/${props.thing.id}`}><Typography color="text.secondary">Learn More</Typography></Button>
    </CardActions>
  </Card>
)

export default class Portfolio extends Component {
  constructor(props){
    super(props)

    this.state = {
      cards: [],
    }
  }

  componentDidMount(){
      this.setState({cards: portfoliodata})
  }

  render(){
    return(
      <Box>
        <Box sx={{ flexGrow: 1, paddingLeft: "3em", paddingRight: "3em", paddingTop:"9em"}}>
          <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {this.state.cards.map(x=>{
              return (
                <Grid item xs={16} sm={8} md={4} key={x.id}>
                  <Thing thing={x} key={x.id}/>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <div class='view'>
          <ul class='circles'>
            <li class='h1 item'></li>
            <li class='h2 item'></li>
            <li class='h3 item'></li>
            <li class='h4 item'></li>
            <li class='h5 item'></li>
            <li class='h6 item'></li>
            <li class='h7 item'></li>
          </ul>
        </div>
      </Box>
    )
  }
}