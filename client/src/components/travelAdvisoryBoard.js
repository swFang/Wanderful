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
      TravelAdvisory: '',
      Vaccine: '',
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

  async getVaccine() {
    let vaccine = await axios.get('http://localhost:5000/healthAdvisory/:location')
        .then((response)=> {
          this.setState({Vaccine: response.data})
        }).catch((error) => {
            console.log(error)
        });
  }

  async componentDidMount() {
    const test = await this.getTravelAdvisory();
    const test2 = await this.getVaccine();
  }

  render() {
        return (
          <div>
            <Card className='advisory' variant="outlined">
              <CardContent>
                <img className='icon' src={warning}></img>
                <div>
                  <h1 className='redTitle left'> TRAVEL ADVISORY </h1>
                </div>
                <Typography className='advisory-msg left'>
                  {this.state.TravelAdvisory}
                </Typography>
                <h3 className='left learnMore'> <a  target="_blank" href="https://travel.gc.ca/travelling/advisories?wbdisable=true">  LEARN MORE </a></h3>
              </CardContent>
            </Card>
            <Card className='advisory' variant="outlined">
              <CardContent>
                <img className='icon' src={warning}></img>
                <div>
                  <h1 className='redTitle left'> VACCINE ADVISORY </h1>
                </div>
                <Typography className='advisory-msg left'>
                  {this.state.Vaccine}
                </Typography>
                <h3 className='left learnMore'> <a  target="_blank" href="https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-3-vaccination-specific-populations.html">  LEARN MORE </a></h3>
              </CardContent>
            </Card>
          </div>
  )}
}