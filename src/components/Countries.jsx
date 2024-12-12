/* eslint-disable react/react-in-jsx-scope */
import styles from './Countries.module.css'
import PropTypes from 'prop-types'

const cities =  {
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
function Countries() {
    return (
        <ul className={`${styles.countries}`}>
            {cities["cities"].map(country => 
                <Country key={country.id} countryInfo={country}/>
            )}
        </ul>
    )
}

function Country({countryInfo}){
    const {emoji,country} = countryInfo;
    return (
        <li className={`${styles.country} flex flex-col flex-center-y`}>
            <p className={styles.emoji}>{emoji}</p>
            <p className={styles['country-name']}>{country}</p>
        </li>
    )
}

Country.propTypes = {
    countryInfo: PropTypes.shape({
        emoji: PropTypes.string,
        country: PropTypes.string
    }).isRequired
};

export default Countries