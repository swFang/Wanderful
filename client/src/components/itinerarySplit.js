import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

class ItinerarySplit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Charlie',
            selfCost: '150',
            numMembers: 3,
            owes: [
                {
                    name: 'Alice',
                    amount: 176.67
                }
            ],
            expenses: [
                {
                    name: 'Alice',
                    amount: 295
                }, {
                    name: 'Bob',
                    amount: 535
                }, {
                    name: 'Charlie',
                    amount: 150
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h2" align="left">
                                    What you owe
                            </Typography>
                            </Grid>
                            <Grid item xs={9} align="left">
                                {this.state.owes[0].name}
                            </Grid>
                            <Grid item xs={1}>
                                <AttachMoneyIcon />
                            </Grid>
                            <Grid item xs={2} align="left">
                                <Typography >
                                    {this.state.owes[0].amount}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </div>

        )
    }
}

export default ItinerarySplit;