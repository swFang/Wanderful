import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css';
import gina from '../img/Gina.png';
import holt from '../img/Holt.png';
import jake from '../img/Jake.png';
import you from '../img/you.png';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';




export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { showBar: false };
  }
  toggleDrawer = function () {
    this.setState({ showBar: !this.state.showBar })
  };



  render() {
    const sideList = side => (
      <div>
        <ListItem >
           <img src={gina}/>
          <ListItemText primary="Gina Linetti" secondary="Near Wesbrook Mall" />
        </ListItem>
        <Divider />
        <ListItem >
        <img src={holt}/>
          <ListItemText primary="Raymond Holt" secondary="Near Dalhousie Rd" />
        </ListItem>
        <Divider />
        <ListItem >
        <img src={jake}/>
          <ListItemText primary="Jake Peralta" secondary="Near Oyama Ct"/>
        </ListItem>
      </div>
    );
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={15}
          styles={mapStyles}
          initialCenter={{
            lat: 49.263,
            lng: -123.245
          }}
        >
          <Marker
            position={{ lat: 49.260, lng: -123.240 }}
            icon={gina} title="Gina" onClick={this.toggleDrawer.bind(this)} />
          <Marker
            position={{ lat: 49.261, lng: -123.238 }}
            icon={jake} title="Jake" onClick={this.toggleDrawer.bind(this)} />
          <Marker
            position={{ lat: 49.266, lng: -123.241 }}
            icon={holt} title="Holt" onClick={this.toggleDrawer.bind(this)} />
          <Marker
            position={{ lat: 49.263, lng: -123.245 }}
            icon={you} />
        </Map>
        <Drawer anchor="bottom" open={this.state.showBar} onClose={this.toggleDrawer.bind(this)}>
          {sideList('bottom')}
        </Drawer>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBe2jR0snaho_JxzJCkZzVbGRarBk1t2AY'
})(MapContainer);

const mapStyles = [{ "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ae9e90" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] }, { "featureType": "poi.park", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ebe3cd" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] }];