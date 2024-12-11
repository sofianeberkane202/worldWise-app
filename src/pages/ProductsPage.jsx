import styles from './ProductsPage.module.css'
import NavBar from '../components/NavBar'
/* eslint-disable react/react-in-jsx-scope */
function ProductsPage() {
    return (
        <div className={styles.products}>
            <NavBar/>
        </div>
    )
}

export default ProductsPage