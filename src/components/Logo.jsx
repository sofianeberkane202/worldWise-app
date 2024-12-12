import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
/* eslint-disable react/react-in-jsx-scope */
function Logo() {
    return (
        <Link to={'/'}>
            <div className={`${styles.logo} flex flex-center-y`}>
                <img src="/logo.png" alt="logo"/>
            </div>
        </Link>
    )
}

export default Logo