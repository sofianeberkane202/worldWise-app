/* eslint-disable react/react-in-jsx-scope */
import styles from './Form.module.css'

function Form() {
    return (
        <form className={styles.form}>
            {/* city name block */}
            <div className={styles.name}>
                <label className={styles.title} htmlFor='city-name'>City name</label>
                <div className={styles['city-name-field']}>
                    <input type='text' id='city-name' value={'sofiane'}/>
                    <span className={styles.emoji}>🇫🇷</span>
                </div>
            </div>

            {/* date block */}
            <div>
                <label className={styles.title} htmlFor='date'>When did you go to Ahuille?</label>
                <input type='text' id='date' value={'sofiane'}/>
            </div>

            {/* note block */}
            <div>
                <label className={styles.title} htmlFor='note'>Notes about your trip to Ahuille</label>
                <textarea type='text' id='note' value={'sofiane'}/>
            </div>

        </form>
    )
}

export default Form