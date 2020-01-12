import React, {Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';
import warning from '../warning.png';

const axios = require('axios');
//const advisoryBaseURL = 'http://localhost:5000/travelAdvisory';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class AdvisoryBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      TravelAdvisory: ''
    }
  }

  // aysnc getHealthAdvisory() {

  //   return 'test';
  // }

  async getTravelAdvisory() {
    // let locationURL = advisoryBaseURL + '/congo';
    // console.log('url of api call is ', locationURL)
    let advisory = await axios.get('http://localhost:5000/travelAdvisory/congo')
        .then((response)=> {
          this.setState({TravelAdvisory: response.data})
        }).catch((error) => {
            console.log(error)
        });
  }

  async componentDidMount() {
    const test = await this.getData();
  }

  render() {
        return (
    <Card className='advisory' variant="outlined">
    <CardContent>
    <img className='icon' src={warning}></img>
      <div>
        <h1 className='redTitle left'> TRAVEL ADVISORY </h1>
      </div>
      <Typography className='advisory-msg left'>
        {this.state.TravelAdvisory}
      </Typography>
      <h3 className='left learnMore'> <a  href="https://travel.gc.ca/travelling/advisories?wbdisable=true">  LEARN MORE </a></h3>
    </CardContent>
  </Card>
  )}
}