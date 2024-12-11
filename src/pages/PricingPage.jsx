import NavBar from '../components/NavBar'
import styles from './PricingPage.module.css'
/* eslint-disable react/react-in-jsx-scope */
function PricingPage() {
    return (
        <div className={styles.pricing}>
            {/* navBar */}
            <NavBar/>
            {/* content */}
            <div className={`${styles.content} flex flex-center-y flex-center-x`}>
                <div>
                    <h2>
                        Simple pricing.<br/>
                        Just $9/month.
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Vitae vel labore mollitia iusto. Recusandae quos provident,
                        laboriosam fugit voluptatem iste.
                    </p>
                </div>

                <div className={`${styles.image} flex-1 flex flex-end-x`}>
                    <img 
                    src='../../public/img-2.jpg' 
                    alt='paricing image'
                    width={500}
                    height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default PricingPage