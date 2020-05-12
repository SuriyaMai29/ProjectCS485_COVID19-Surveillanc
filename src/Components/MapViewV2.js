import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';

const markerIcon = divIcon({className: 'marker-icon pink', iconSize: [12, 12]})

 function MapViewV2(props){
     console.log(props.locations)
     const { locations } = props;
     console.log(locations)
    const markerElements = locations.map(location=>{
        const {
            id, country_code,
            country, province,
            coordinates: { latitude, longitude },
            latest: { confirmed }
        } = location;

        let title = country;
        if (province !== '' && province !== country) {
            title = `${province}, ${country}`;
        }
        return (
            <Marker 
                key={`${id}-${country_code}`} 
                position={[latitude, longitude]}
                icon={markerIcon} >
                <Popup>{title}</Popup>
            </Marker>
        );


    })

     return(<Map className="map-view" center={[13,100]} zoom={5}>
     <TileLayer
         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     {markerElements}
 </Map>)

}
export default MapViewV2;