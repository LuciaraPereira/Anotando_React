import CardNote from "../CardNote/CardNote";
import styles from './ViewNotes.module.css';



function ViewNotes({ notas, excluirNota, abrirEdicao }){
    const user = JSON.parse(localStorage.getItem("usuario"));
    const date = new Date().getHours();
    let saudacao;

    if(date < 12){
        saudacao = "bom dia"
    }
    else if(date < 18){
        saudacao = "boa tarde!"
    }
    else{
        saudacao = "boa noite"
    }

    return(
        <section className={styles.viewNotes}>
            <h2 className={styles.titleNotes}>Olá {user.nome}, {saudacao}!</h2>
            <div className={styles.containerNotes}>
               
           { notas.map((nota) => (
                <CardNote key={nota.id} nota={nota} title={nota.title} description={nota.description} excluirNota={excluirNota} abrirEdicao={abrirEdicao} />
            )) }
            </div>        
        </section>    
    );

}


export default ViewNotes;