import NavBar from '../components/NavBar';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
/* eslint-disable react/react-in-jsx-scope */
function HomePage() {
    return (
        <div className={`flex flex-col ${styles.homePage}`}>
            {/* navBar */}
            <NavBar/>
            {/* content */}
            <Content/>
        </div>
    )
}

function Content(){
    return(
        <div className={`flex flex-col flex-center-y ${styles.content}`}>
            <h1>
                <span>You travel the world.</span>
                <span>WorldWise keeps track of your adventures.</span>
            </h1>
            <p>
                A world map that tracks your footsteps into every city you can
                think of. Never forget your wonderful experiences, and show your
                friends how you have wandered the world.
            </p>
            <Link to={'/travel/cities'} className='btn primary'>start tracking now</Link>
         </div>
    )
}

export default HomePage