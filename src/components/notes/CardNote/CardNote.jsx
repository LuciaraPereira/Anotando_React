import Actions from '../Actions/Actions';
import styles from './CardNote.module.css';

function CardNote({title, description, excluirNota, nota, abrirEdicao}){
    return(
        <>
            <section>
                
                <div className={styles.card}>
                    <Actions excluirNota={excluirNota} nota={nota} abrirEdicao={abrirEdicao}/>
                    <h2 className={styles.titulo}>{title}</h2>
                    <p className={styles.descricao}>{description}</p>
                </div>
            </section>
        </>
    );
}

export default CardNote;