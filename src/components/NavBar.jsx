import Logo from "./Logo"
import styles from "./NavBar.module.css"
import { Link, NavLink } from "react-router-dom"
import { handleActive } from "../helper";

/* eslint-disable react/react-in-jsx-scope */
function NavBar() {

    return (
        <div className={`${styles.nav} flex flex-between flex-center-y`}>

            {/* logo */}
             <Logo/>

            {/* list */}
            <ul className="flex flex-between flex-center-y">
                <li>
                    <NavLink 
                    to={'/product'}
                    className={({isActive}) => handleActive(isActive,styles)}
                    >
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to={'/pricing'}
                    className={({isActive}) => handleActive(isActive,styles)}
                    >
                        Pricing
                    </NavLink>
                </li>

                <li>
                    <Link to={'/login'} className="primary btn"> Login </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar