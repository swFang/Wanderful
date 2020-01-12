import React, {Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css';
import MapContainer from './MapContainer';
import AdvisoryBoard from './travelAdvisoryBoard';
import Profile from './profile';
import Itinerary from './itinerary';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import buddyImg from '../find buddy.png';
import InfoImg from '../flag.png';
import itinImg from  '../itinerary.png';
import ExpensesImg from '../budget.png';
import back from '../82773560_1023084961383144_144685868970409984_n.png';
import dash from '../dashboard.png';
import CalendarContainer from './CalendarContainer';

const axios = require('axios');
const buttons = ['Information', 'Itinerary', 'Expenses', 'FindMyBuddy'];

export default class LandingPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        Information: false,
        Itinerary: false, 
        Expenses: false,
        FindMyBuddy: false
      };
    }

    renderNavBar() {
        let title = 'Home';
        if(this.state.Information) {
            title = 'Travel Advisory';
        } else if (this.state.Itinerary) {
            title = 'Itinerary';
        } else if (this.state.Expenses) {
            title = 'Expenses';
        } else if (this.state.FindMyBuddy) {
            title = 'Find My Buddy';
        }

        return(
            <div className='nav'>
            <AppBar position="static">
              <Toolbar>
                <img src={back} className='back'
                    onClick = {() => {
                        this.setState({ 
                            Information: false,
                            Itinerary: false, 
                            Expenses: false,
                            FindMyBuddy: false,
                        })
                    }}>
                </img>
                {<h2 className='Nav-text'>{title}</h2>}
              </Toolbar>
            </AppBar>
          </div>

        )
    }

    getIcon(btn) {
        if (btn == 'Information') {
            return InfoImg;
        } else if (btn == 'Itinerary') {
            return itinImg;
        } else if (btn =='Expenses') {
            return ExpensesImg;
        } else if (btn == 'FindMyBuddy') {
            return buddyImg;
        }
    }

    renderHomePage() {
        return (
            buttons.map((btn) => {
                return (
                    <Card className='outside' 
                    onClick={() => {
                       this.setState({[btn]: !this.state[btn]})
                       console.log(this.state[btn]);
                    }}>
                        <CardContent>
                            <img className='icon-nav' src={this.getIcon(btn)}></img>
                            <Typography className='secondary' color="textSecondary" gutterBottom>
                                {btn}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })
        );
    }

    render() {
        if(!this.state.Information && !this.state.Itinerary && !this.state.Expenses && !this.state.FindMyBuddy) {
            return (
                <div>
                    {this.renderNavBar()}
                    <div className='landingCont'>
                        <div className='landingText'>
                            <h2 className='navWelcome'>Welcome Amy!</h2>
                            <p>
                                Youre currently looking at your Congo plans!
                            </p>
                        </div>
                        <img className='icon-dash' src={dash}></img>
                    </div>
                    {this.renderHomePage()}
                </div>
            );
        } else {
            return ( 
                <div>
                    {this.renderNavBar()}
                    {this.state.Information && <AdvisoryBoard></AdvisoryBoard>}
                    {this.state.Expenses && <Itinerary></Itinerary> }
                    {this.state.Itinerary && <CalendarContainer></CalendarContainer> }
                    {this.state.FindMyBuddy && <MapContainer></MapContainer> }
                </div>
            );
        }
    }
  }