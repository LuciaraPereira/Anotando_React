import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./Actions.module.css";

function Actions ({nota, excluirNota, abrirEdicao}){

    return(
    <section className={styles.containerActions}>
        <button className={styles.btnsActions} onClick={() => excluirNota(nota.id)}> 
            <FaTrash />
        </button>
        <button className={styles.btnsActions} onClick={() => abrirEdicao(nota)}>
            <FaEdit />
        </button>       
    </section>

    );
}

export default Actions; 