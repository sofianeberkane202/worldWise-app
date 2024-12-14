/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styles from './Cities.module.css'
import { handleDateWithoutDay } from '../helper';
import { useCities } from '../context/ContextCities';



function Cities() {
    const {cities} = useCities();
    return (
        <ul className={`flex flex-col ${styles.cities}`}>
            {cities.map(city => 
                <City 
                key={city.id} 
                city={city}
                />)}
        </ul>
    )
}

function City({city}){
    const {cityName, emoji,id, position:{lat,lng}, date} = city;
    return (
        <NavLink to={`${id}?lat=${lat}&lng=${lng}`}>
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

            <p className={`${styles.date} flex-1`}>({handleDateWithoutDay(date)})</p>

            <button>&times;</button>
          </li>
        </NavLink>
        
    )
}

City.propTypes = {
    city: PropTypes.object
};

Cities.propTypes = {
    cities: PropTypes.array,
};

export default Cities