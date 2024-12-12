import styles from './TravelPage.module.css'
/* eslint-disable react/react-in-jsx-scope */
function TravelPage() {
    return (
        <div className={`${styles.travel} flex`}>
            {/* side bar */}
            <div className={`${styles.sideBar} flex-1 `}>

            </div>

            {/* Map */}
            <div className={`${styles.map} flex-1`}>

            </div>
        </div>
    )
}

export default TravelPage