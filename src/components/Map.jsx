/* eslint-disable react/react-in-jsx-scope */

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'
import styles from './Map.module.css'

const cities= {
    "cities": [
      {
        "id": "8631",
        "cityName": "Wielichowo",
        "country": "Poland",
        "emoji": "🇵🇱",
        "date": "2024-12-09T08:01:08.028Z",
        "notes": "amizing",
        "position": {
          "lat": "52.106395654383256",
          "lng": "16.327977153884454"
        }
      },
      {
        "id": "fcde",
        "cityName": "Civril",
        "country": "Turkiye",
        "emoji": "🇹🇷",
        "date": "2024-12-09T08:01:33.697Z",
        "notes": "normal",
        "position": {
          "lat": "38.175217134937206",
          "lng": "29.68966322211157"
        }
      },
      {
        "id": "f921",
        "cityName": "Cheminon",
        "country": "France",
        "emoji": "🇫🇷",
        "date": "2024-12-09T08:07:19.675Z",
        "notes": "",
        "position": {
          "lat": "48.731974812301495",
          "lng": "4.916356449203186"
        }
      },
      {
        "id": "8c7f",
        "cityName": "Hrodna",
        "country": "Belarus",
        "emoji": "🇧🇾",
        "date": "2024-12-09T08:15:46.990Z",
        "notes": "normal",
        "position": {
          "lat": "53.79481713296426",
          "lng": "23.811629264193233"
        }
      }
    ]
  }

function Map() {
    const position = [51.505, -0.09];
    const positions = cities["cities"].map(city => {
        const {position:{lat,lng}} = city;
        return {
            position: [+lat,+lng],
            cityName: city.cityName,
            emoji: city.emoji,
        }
    });
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