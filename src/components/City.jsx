/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/react-in-jsx-scope */
import ButtonBack from './ButtonBack';
import styles from './City.module.css'
import PropTypes from 'prop-types'
function City() {
    // const {cityName, emoji} = city;
    
    return (
        <div className={styles.city}>
            <div className={styles.box}>
                <p className={styles.title}>city name</p>
                <p className={styles['city-name']}>
                    <span className={styles.emoji}>🇬🇧</span>
                    <span>Cold Ashby</span>
                </p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>You went to Cold Ashby on</p>
                <p>
                    Friday, December 13, 2024
                </p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>Learn more</p>
                
                <a 
                href={`https://en.wikipedia.org/wiki/Cold_Ashby`} 
                target='_blank'>
                    {`Check out Cold Ashby on Wikipedia →`}
                </a>
            </div>

            <ButtonBack />
            
        </div>
    )
}

City.propTypes = {
    city: PropTypes.object
};

export default City