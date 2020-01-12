import React, { Component } from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import itinerary from './itinerary.json';


export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myEvents: itinerary,
            show: true
        };
    }

    // showEventCalendar = function() {
    //     this.setState({show: !this.state.show});
    // }

    // addEvent = function() {
    //     var changedState = this.state;
    //     changedState.myEvents = changedState.myEvents.concat([{
    //         d: new Date(),
    //         text: "Today's great Event",
    //     }]);
    //     this.setState(changedState);
    // }

    render() {
        return (
            <div>
                {this.state.show && <mobiscroll.Eventcalendar
                    theme="ios"
                    themeVariant="light"
                    display="inline"
                    data={this.state.myEvents}
                    view={{
                        calendar: { type: 'week' },
                        eventList: { type: 'day' }
                    }}
                />}
                {/* <button onClick={this.showEventCalendar.bind(this)}>Show</button> */}
                {/* <button onClick={this.addEvent.bind(this)}>Add Event</button> */}
            </div>
        );
    }
}

export default Calendar;
