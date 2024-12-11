import styles from './Logo.module.css';
/* eslint-disable react/react-in-jsx-scope */
function Logo() {
    return (
        <div className={`${styles.logo} flex flex-center-y`}>
            <img src="../../public/logo.png" alt="logo"/>
        </div>
    )
}

export default Logo