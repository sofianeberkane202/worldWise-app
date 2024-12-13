import { useNavigate } from "react-router-dom";
import styles from "./ButtonBack.module.css"

/* eslint-disable react/react-in-jsx-scope */
function ButtonBack() {
    const navigate = useNavigate();
    return (
        <button 
        className={`btn ${styles.back}`}
        onClick={() => navigate(-1)}
        >
            &larr; Back
        </button>
    )
}

export default ButtonBack