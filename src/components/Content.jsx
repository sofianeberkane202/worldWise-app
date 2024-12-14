import styles from './Content.module.css'
import PropTypes from 'prop-types'
/* eslint-disable react/react-in-jsx-scope */
function Content({children}) {
    return (
        <div className={`${styles.content} flex flex-center-y flex-center-x`}>
            {children}
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.array
};

export default Content