/* eslint-disable react/react-in-jsx-scope */

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './Map.module.css'

function Map() {
    const position = [51.505, -0.09]
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
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
            
        </div>
    )
}

export default Map