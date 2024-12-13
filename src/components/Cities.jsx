/* eslint-disable react/react-in-jsx-scope */

import { NavLink } from 'react-router-dom';
import styles from './Cities.module.css'
import PropTypes from 'prop-types'
const cities = {
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

function Cities() {
    return (
        <ul className={`flex flex-col ${styles.cities}`}>
            {cities["cities"].map(city => 
                <City 
                key={city.id} 
                city={city}
                />)}
        </ul>
    )
}

function City({city}){
    const {cityName, emoji,id} = city;
    return (
        <NavLink to={`${id}`}>
          <li className={`flex flex-center-y ${styles.city}`}>
            <p className="flex flex-center-y">
                <span className={styles.emoji}>{emoji}</span>
                <span 
                className={styles['city-name']}
                style={cityName.length > 10 ? {fontSize:'1.2rem'} : 
                {fontSize:'1.6rem'}
                }
                >
                    {cityName}
                </span>
            </p>

            <p className={`${styles.date} flex-1`}>(December 12, 2024)</p>

            <button>&times;</button>
          </li>
        </NavLink>
        
    )
}

City.propTypes = {
    city: PropTypes.shape({
        emoji: PropTypes.string,
        cityName: PropTypes.string,
        id: PropTypes.string,
    }).isRequired
};

export default Cities