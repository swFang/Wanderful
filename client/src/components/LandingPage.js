import React, {Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './style.css';
import MapContainer from './MapContainer';
import AdvisoryBoard from './travelAdvisoryBoard';
import Profile from './profile';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const axios = require('axios');
const buttons = ['Information', 'Itinerary', 'Cost'];

export default class LandingPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        Information: false,
        Itinerary: false, 
        Cost: false,
      };
    }

    renderNavBar() {
        return(
            <div className='nav'>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className='test' color="inherit" aria-label="menu" 
                    onClick = {() => {
                        this.setState({ 
                            Information: false,
                            Itinerary: false, 
                            Cost: false,
                        })
                    }}>
                  <MenuIcon />
                </IconButton>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>

        )
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
        if(!this.state.Information && !this.state.Itinerary && !this.state.Cost) {
            return (
                <div>
                    {this.renderNavBar()}
                    {this.renderHomePage()}
                </div>
            );
        } else {
            return ( 
                <div>
                    {this.renderNavBar()}
                    {this.state.Information && <AdvisoryBoard></AdvisoryBoard>}
                    {this.state.Cost && <Profile></Profile>}
                    {this.state.Itinerary && <MapContainer></MapContainer> }
                </div>
            );
        }
    }
  }