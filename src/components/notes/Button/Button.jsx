import styles from './Button.module.css';

function Button({ texto, onClick, type}){

    return(
    <button className={styles.botao} onClick={onClick} type={type}> {texto} </button>
    );

}

export default Button;