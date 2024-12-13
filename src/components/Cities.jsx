/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styles from './Cities.module.css'




function Cities({cities}) {

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

Cities.propTypes = {
    cities: PropTypes.array,
};

export default Cities