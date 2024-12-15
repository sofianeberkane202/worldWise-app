/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Form.module.css'
import { useEffect, useState } from 'react';
import { fetchData } from '../helper';
import Button from './Button';
import ButtonBack from './ButtonBack';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import { useCities } from '../context/ContextCities';



function Form() {

    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());
    const [note, setNote]= useState('');
    const [cityName, setCityName]= useState('')
    const [emoji, setEmoji]= useState('');
    const [country,setCountry]= useState('');

    const {postNewCity}= useCities();


    // eslint-disable-next-line no-unused-vars
    const [searchPosition, setSearchPosition]= useSearchParams({});
    const lat = searchPosition.get('lat');
    const lng = searchPosition.get('lng');

    function getCountryFlagEmoji(countryCode) {
        if(!countryCode) return;
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0)); // 127397 is the offset for 'A'
        return String.fromCodePoint(...codePoints);
    }

    useEffect(function(){
        async function fetchPositionInfo(){
            const url= `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            try {
                const data = await fetchData(url);

                const {city,country,country_code,state,village,locality} = data.address;

                setCityName(city || village || state || locality || 'Unknown Location');
                setEmoji(getCountryFlagEmoji(country_code));
                setCountry(country);
                
            } catch (error) {
                console.log(error);
            }
        }

        if(lat && lng) fetchPositionInfo();
    },[lat,lng]);

    const newCity= {
        cityName,
        country,
        emoji,
        date: new Date().toISOString(),
        note,
        position: {
          lat,
          lng
        }
      }

    return (
        <form className={styles.form}>
            {/* city name block */}
            <div className={styles.name}>
                <label className={styles.title} htmlFor='city-name'>City name</label>
                <div className={styles['city-name-field']}>
                    <input 
                    type='text' 
                    id='city-name' 
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    />

                    <span className={styles.emoji}>
                        {emoji}
                    </span>
                </div>
            </div>

            {/* date block */}
            <div>
                <label className={styles.title} htmlFor='date'>When did you go to Ahuille?</label>
                {/* <input type='text' id='date' value={'sofiane'}/> */}

                <Flatpickr
                id="date"
                value={date}
                onChange={(selectedDates) => setDate(selectedDates[0])}
                options={{ dateFormat: "d/m/Y" }}
            />
            </div>

            {/* note block */}
            <div>
                <label className={styles.title} htmlFor='note'>Notes about your trip to Ahuille</label>
                <textarea type='text' id='note' value={note} onChange={(e) => setNote(e.target.value)}/>
            </div>

            <div className='flex flex-between '>
                <Button
                type={'primary'}
                handleclick={async (e) =>{ 
                    e.preventDefault();
                    await postNewCity(newCity)
                    navigate('/travel/cities');
                }}
                >
                    Add
                </Button> 
                <ButtonBack/>
            </div>

        </form>
    )
}

export default Form