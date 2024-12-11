import PropTypes from 'prop-types'
import styles from './Button.module.css';
/* eslint-disable react/react-in-jsx-scope */
function Button({type, children}) {
    return (
        <button className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string
};

export default Button