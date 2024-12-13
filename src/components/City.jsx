/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/react-in-jsx-scope */
import ButtonBack from './ButtonBack';
import styles from './City.module.css'
import PropTypes from 'prop-types'
import { handleDate } from '../helper';

import { URL } from '../config';
import { fetchData } from '../helper';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
function City() {
    
    const {id} = useParams();

    const [city,setCity]= useState({});

    useEffect(function(){
        async function fetchCityData(){
            try {
                const data = await fetchData(`${URL}/${id}`);
                
                setCity(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCityData();
    },[id])

    const {
        emoji,
        cityName,
        date,
    } = city;

    
    
    
    return (
        <div className={styles.city}>
            <div className={styles.box}>
                <p className={styles.title}>city name</p>
                <p className={styles['city-name']}>
                    <span className={styles.emoji}>{emoji}</span>
                    <span>{cityName}</span>
                </p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>You went to Cold Ashby on</p>
                <p>
                    {handleDate(date)}
                </p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>Learn more</p>
                
                <a 
                href={`https://en.wikipedia.org/wiki/${cityName}`} 
                target='_blank'>
                    {`Check out ${cityName} on Wikipedia →`}
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