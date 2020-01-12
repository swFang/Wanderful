import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Grace',
            lastName: 'Luong',
            phone: '604-123-4567',
            nationalities: ['Canadian', 'Australian'],
            emergencyContacts: [{
                first: 'Contact',
                last: 'One',
                phone: '604-111-1111'
            }, {
                first: 'Contact',
                last: 'Two',
                phone: '604-222-2222'
            }, {
                first: 'Contact',
                last: 'Three',
                phone: '604-333-3333'
            }],
        }
    }

    combineName() {
        return this.state.firstName + ' ' + this.state.lastName;
    }

    renderNationalities() {
        return (
            this.state.nationalities.map((element) => {
                return (
                    <Typography color="textSecondary" align="left">
                        {element}
                    </Typography>
                )
            })
        );
    }

    renderEmergencyContacts() {
        return (
            this.state.emergencyContacts.map((element) => {
                var name = element.first + ' ' + element.last;
                return (
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Typography color="textSecondary" align="left">
                                    {name}
                                </Typography>
                                <Typography color="textSecondary" align="left">
                                    {element.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2" align="left">
                            My Info
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <AccountCircleIcon />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography color="textSecondary" align="left">
                                    {this.combineName()}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <PhoneIcon />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography color="textSecondary" align="left">
                                    {this.state.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <ImportContactsOutlinedIcon />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography color="textSecondary" align="left">
                                    {this.renderNationalities()}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <ContactsOutlinedIcon />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="textSecondary" align="left">
                                    {this.renderEmergencyContacts()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>

        )
    }
}

export default Profile;