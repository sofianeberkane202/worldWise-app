import styles from './LoginPage.module.css'
import NavBar from '../components/NavBar'
/* eslint-disable react/react-in-jsx-scope */
function LoginPage() {
    return (
        <div className={styles.login}>
            <NavBar/>
        </div>
    )
}

export default LoginPage