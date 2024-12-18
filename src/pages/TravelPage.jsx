import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import styles from './TravelPage.module.css'
import { handleActive } from '../helper'
import Map from '../components/Map'
/* eslint-disable react/react-in-jsx-scope */
function TravelPage() {
    return (
        <div className={`${styles.travel} flex`}>
            {/* side bar */}
            <div className={`${styles.sideBar} flex flex-col flex-center-y`}>
                <Logo/>
                
                <div className={styles.controlers}>
                    <NavLink 
                    className={({isActive}) => handleActive(isActive,styles)}
                    to={'cities'}>cities</NavLink>
                    <NavLink 
                    className={({isActive}) => handleActive(isActive,styles)}
                    to={'countries'}>countries</NavLink>
                </div>

                <Outlet/>
            </div>

            {/* Map */}          
            <Map/>
        </div>
    )
}

export default TravelPage