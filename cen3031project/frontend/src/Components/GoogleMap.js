import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        console.log(this.props.address)
        return (
            <Map google={this.props.google}
                initialCenter={{
                    lat: this.props.address.latitude,
                    lng: this.props.address.longitude
                }}
                center={{
                    lat: this.props.address.latitude,
                    lng: this.props.address.longitude
                }} zoom={7}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDtaCy-P7DUboSkVmNBlolqOyQEmJ7QE_s")
})(MapContainer)