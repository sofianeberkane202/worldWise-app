/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import styles from './Countries.module.css'
import PropTypes from 'prop-types'
import { ContextCities } from '../App';

function Countries() {
    const {cities}= useContext(ContextCities);
    return (
        <ul className={`${styles.countries}`}>
            {cities.map(country => 
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

Countries.propTypes = {
    cities: PropTypes.array
};

export default Countries