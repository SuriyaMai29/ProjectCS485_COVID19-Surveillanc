import React, { useState, useEffect, useCallback } from 'react';
import 'leaflet/dist/leaflet.css';
import './Css/App.scss';
import MapViewV2 from '../Components/MapViewV2'
import GifLoader from 'react-gif-loader';
import Heatmap from '../Components/MapViewV2'

const api = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations';
function Appv2(){
    const [locations,setLocations] = useState([]);
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(res=>{
            setLocations(res.locations)
        })
        .catch(error=>console.log(error))

    },[])
    console.log(locations)
   return(<> 
    {(locations && locations.length > 0)?<MapViewV2 locations = {locations}></MapViewV2> :<GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
                imageStyle={{marginTop: "5%"}}
                overlayBackground="rgba(0,0,0,0.5)"
            />}
    </>)
}

export default Appv2;