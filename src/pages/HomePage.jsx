import NavBar from '../components/NavBar';
import styles from './HomePage.module.css';
/* eslint-disable react/react-in-jsx-scope */
function HomePage() {
    return (
        <div className={styles.homePage}>
            {/* navBar */}
            <NavBar/>
            {/* content */}
            
        </div>
    )
}

export default HomePage