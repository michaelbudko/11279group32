import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        console.log(this.props.address)
        return (
			<div id = "Map">
				<Map google={this.props.google}
					style={{
						width: '97%',
						height: '60%',
					}}
					initialCenter={{
						lat: this.props.address.latitude,
						lng: this.props.address.longitude
					}} center={{
                    				lat: this.props.address.latitude,
                    				lng: this.props.address.longitude
					}} zoom={14}>
					<Marker onClick={this.onMarkerClick}
						position={{ lat: this.props.address.latitude, lng: this.props.address.longitude }}
						name={'Current location'} />
					
				</Map>
			</div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDtaCy-P7DUboSkVmNBlolqOyQEmJ7QE_s")
})(MapContainer)
