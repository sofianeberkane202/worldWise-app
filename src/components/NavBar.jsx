import Button from "./Button"
import Logo from "./Logo"
import styles from "./NavBar.module.css"
import { Link, NavLink } from "react-router-dom"

/* eslint-disable react/react-in-jsx-scope */
function NavBar() {
    console.log(styles);
    return (
        <div className={`${styles.nav} flex flex-between flex-center-y`}>
            {/* logo */}
            <Link to={'/'}>
                <Logo/>
            </Link>
            {/* list */}
            <ul className="flex flex-between flex-center-y">
                <li>
                    <NavLink to={'/product'}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={'/pricing'}>Pricing</NavLink>
                </li>
                <li>
                    <Button type='primary'>Login</Button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar