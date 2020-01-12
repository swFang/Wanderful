import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import ItinerarySplit from './itinerarySplit'
import '../css/itinerary.css';

class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Charlie',
            itinerary: [{
                category: 'Food',
                events: [
                    {
                        title: 'Conveyor Belt Sushi',
                        location: '111 Street',
                        cost: 50,
                        payer: 'Alice'
                    }, {
                        title: 'Ramen',
                        location: '222 Street',
                        cost: 35,
                        payer: 'Alice'
                    }, {
                        title: 'Sashimi',
                        location: '333 Street',
                        cost: 60,
                        payer: 'Bob'
                    }, {
                        title: 'Wagyu Beef',
                        location: '444 Street',
                        cost: 250,
                        payer: 'Bob'
                    }, {
                        title: '7 Eleven',
                        location: '555 Street',
                        cost: 25,
                        payer: 'Bob'
                    }]
            }, {
                category: 'Transportation',
                events: [
                    {
                        title: 'Taxi',
                        location: '11 Street',
                        cost: 50,
                        payer: 'Charlie'
                    }, {
                        title: 'Bullet Train',
                        location: '22 Street',
                        cost: 200,
                        payer: 'Bob'
                    }, {
                        title: 'Ride Share',
                        location: '33 Street',
                        cost: 100,
                        payer: 'Charlie'
                    }]
            }, {
                category: 'Housing',
                events: [
                    {
                        title: 'AirBnb',
                        location: '44 Street',
                        cost: 200,
                        payer: 'Alice'
                    }, {
                        title: 'Capsule Hotel',
                        location: '55 Street',
                        cost: 10,
                        payer: 'Alice'
                    }]
            }],
        }
    }

    renderItinerary() {
        return (
            this.state.itinerary.map((element) => {
                return (
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2" align="left">
                                {element.category}
                            </Typography>
                            {this.renderEvents(element.events)}
                        </CardContent>
                    </Card>
                )
            })
        );
    }

    renderEvents(events) {
        return (
            events.map((event) => {
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography align="left">
                                {event.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <LocationOnIcon />
                        </Grid>
                        <Grid item xs={8} align="left">
                            <Typography color="textSecondary">
                                {event.location}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <AttachMoneyIcon />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography align="left">
                                {event.cost}
                            </Typography>
                        </Grid>
                    </Grid>
                )
            })
        );
    }

    calculateTotal() {
        let cost = 0;
        this.state.itinerary.forEach( (eventSection) => {
            eventSection.events.forEach( (event) => {
                cost += event.cost;
            })
        });
        return cost;
    }

    render() {
        return (
            <div className="itinerary">
                <ItinerarySplit/>
                {this.renderItinerary()}
                <AppBar position="static" color="primary">
                    <ToolBar>
                        <Grid container spacing={2}>
                            <Grid item xs={10} align="left">
                                Total Cost
                            </Grid>
                            <Grid item xs={1} align="left">
                                {this.calculateTotal()}
                            </Grid>
                        </Grid>
                    </ToolBar>
                </AppBar>
            </div>

        )
    }
}

export default Itinerary;