import { NavLink } from "react-router-dom"
import Button from "./Button"
import Logo from "./Logo"
import styles from "./NavBar.module.css"

/* eslint-disable react/react-in-jsx-scope */
function NavBar() {
    return (
        <div className={`${styles.nav} flex flex-between flex-center-y`}>
            {/* logo */}
            <Logo/>
            {/* list */}
            <ul className="flex flex-between flex-center-y">
                <li>Pricing</li>
                <li>
                    <NavLink to={'/product'}>Products</NavLink>
                </li>
                <li>
                    <Button type='primary'>Login</Button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar