import NavBar from '../components/NavBar'
import styles from './PricingPage.module.css'
import stylesContent from '../components/Content.module.css';
import Content from '../components/Content'
/* eslint-disable react/react-in-jsx-scope */
function PricingPage() {
    return (
        <div className={styles.pricing}>
            {/* navBar */}
            <NavBar/>
            {/* content */}
            <Content>
                <div className={stylesContent.text}>
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

                <div className={`${stylesContent.image} flex-1 flex flex-end-x`}>
                    <img 
                    src='../../public/img-2.jpg' 
                    alt='paricing image'
                    width={450}
                    height={450}
                    />
                </div>
            </Content>
        </div>
    )
}

export default PricingPage