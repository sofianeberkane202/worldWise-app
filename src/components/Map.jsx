/* eslint-disable react/react-in-jsx-scope */

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet'
import PropTypes from 'prop-types'
import styles from './Map.module.css'
import {useCities } from '../context/ContextCities';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';


function Map() {
    const {cities}= useCities();
    const [positionClick, setPositionClick]= useState();
    
    const navigate =  useNavigate();

    // eslint-disable-next-line no-unused-vars
    const [searchPosition,setSearchPosition]= useSearchParams();
    const lat=searchPosition.get('lat');
    const lng= searchPosition.get('lng');
    
    

    useEffect(function(){
        if(!positionClick) return;
        const {lat, lng}= positionClick;
        navigate(`form?lat=${lat}&lng=${lng}`,{replace:true});
    }, [positionClick]);



    const positions = cities.map(city => {
        const {position:{lat,lng}} = city;
        return {
            position: [+lat,+lng],
            cityName: city.cityName,
            emoji: city.emoji,
        }
    });


    return (
        <div className={`${styles.map} flex-1`} >
            <MapContainer 
            center={[51.505,-0.09]} 
            zoom={13} 
            scrollWheelZoom={true}
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ClickHandler onPositionClick={setPositionClick}/>

                {positions.map((position,i) => 
                    <Position key={`Pos${i}`} position={position}/>)}

                {lat && lng && <MapCenter lat={lat} lng={lng} />}
            </MapContainer>
            
        </div>
    )
}

const MapCenter = ({ lat, lng }) => {
    const map = useMap();
  
    useEffect(() => {
      if (lat && lng) {
        map.setView([lat, lng], 10); // Center the map at the new position
      }
    }, [lat, lng, map]);
  
    return null;
  };

function ClickHandler({onPositionClick}){
    useMapEvent({
        click: (e) => onPositionClick({lat: e.latlng.lat, lng: e.latlng.lng})
    })
}

function Position({position}){
    const {position: pos, cityName , emoji} = position;
    return (
        <Marker position={pos}>
            <Popup>
                <span className={styles.emoji}>{emoji}</span>
                <span>{cityName}</span>
            </Popup>
        </Marker>
    )
}

Position.propTypes = {
    position: PropTypes.object,
};

MapCenter.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
};

export default Map