import React, { Component } from 'react';
import './Map.css';

export class PersonMarker extends Component {
    render() {
        return (
            <div className="personMarker"
                style={{ backgroundColor: this.props.color, cursor: 'pointer' }}
                title={this.props.name}
            />
        );
    }
};

export default PersonMarker;