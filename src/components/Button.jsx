import PropTypes from 'prop-types'
import styles from './Button.module.css';
/* eslint-disable react/react-in-jsx-scope */
function Button({type, children, handleclick}) {
    return (
        <button 
        className={`${styles.btn} ${styles[type]}`}
        onClick={handleclick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    handleclick: PropTypes.func,
};

export default Button