import styles from './ProductsPage.module.css'
import NavBar from '../components/NavBar'
/* eslint-disable react/react-in-jsx-scope */
function ProductsPage() {
    return (
        <div className={styles.products}>
            <NavBar/>
            <div className={`${styles.content} flex flex-center-y`}>
                <div className={styles.image}>
                    <img 
                    src='../../public/img-1.jpg' 
                    alt='products'
                    width={450}
                    height={450}
                    />
                </div>

                <div>
                    <h2>About WorldWide.</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga perspiciatis?
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi officiis et.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductsPage