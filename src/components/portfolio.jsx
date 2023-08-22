import {Box, useTheme, Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, IconButton} from '@mui/material'
import React, {Component} from 'react'
import portfoliodata from './resources/portfoliodata.json'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './css/portfolio.css'
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
      <Typography variant="h5">
        {props.thing.description}
      </Typography>
    </CardContent>
    <CardActions>
      {props.thing.github==='false' ? (<></>) : (
        <IconButton onClick={()=> window.location=`${props.thing.github}`}>
          <GitHubIcon style={{width:'30px', height:'auto'}}/>
        </IconButton>
      )}
      {props.thing.youtube==='false' ? (<></>) : (
        <IconButton onClick={()=>window.location=`${props.thing.youtube}`}>
          <YouTubeIcon style={{width:'30px', height:'auto'}}/>
        </IconButton>
      )}
      {props.thing.devpost==='false' ? (<></>) : (
        <Button size="small" component={Link} to={`${props.thing.devpost}`}><Typography variant="h6" sx={{paddingLeft: '10px'}}>Devpost</Typography></Button>
      )}
      <Button size="small" component={Link} to={`/portfolio/${props.thing.id}`}><Typography variant="h6" sx={{paddingLeft: '10px'}}>Learn More</Typography></Button>
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
          <Typography variant="h2" sx={{paddingBottom:'20px', fontWeight:'500'}}>⭐ Featured</Typography>
          <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{paddingBottom:'100px'}}>
            {this.state.cards.map(x=>{
              if(x.featured==='true'){
                return <Grid item xs={16} sm={8} md={4} key={x.id}>  <Thing thing={x} key={x.id}/>  </Grid>
              } 
            })}
          </Grid>
          <Typography variant="h2" sx={{paddingBottom: '20px', fontWeight:'500'}}>All</Typography>
          <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {this.state.cards.map(x=>{
              return (
                <Grid item xs={16} sm={8} md={4} key={x.id}>  <Thing thing={x} key={x.id}/>  </Grid>
              )
            })}
          </Grid>
        </Box>
        <br/>
        <br/>
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