/* eslint-disable react/react-in-jsx-scope */

import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet'
import PropTypes from 'prop-types'
import styles from './Map.module.css'
import {useCities } from '../context/ContextCities';
import { useState } from 'react';


function Map() {
    const {cities}= useCities();
    // eslint-disable-next-line no-unused-vars
    const [positionClick, setPositionClick]= useState();

    const position = [51.505, -0.09];

    const positions = cities.map(city => {
        const {position:{lat,lng}} = city;
        return {
            position: [+lat,+lng],
            cityName: city.cityName,
            emoji: city.emoji,
        }
    });

    function ClickHandler(){
        useMapEvent({
            click: (e) => setPositionClick(e.latlng)
        })
    }

    return (
        <div className={`${styles.map} flex-1`}>
            <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={false}
            >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ClickHandler/>

                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>

                {positions.map((position,i) => 
                    <Position key={`Pos${i}`} position={position}/>)}
            </MapContainer>
            
        </div>
    )
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

export default Map