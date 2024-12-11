import styles from './HomePage.module.css';
/* eslint-disable react/react-in-jsx-scope */
function HomePage() {
    console.log(styles);
    return (
        <div className={styles.homePage}>
            <h1>HomePage</h1>
        </div>
    )
}

export default HomePage