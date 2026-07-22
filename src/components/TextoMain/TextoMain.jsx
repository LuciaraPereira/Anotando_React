import styles from "./TextoMain.module.css";
import inicioImagem from "../../assets/img/imageminicio.png"

function TextoMain({abrirCadastro}){
    return(
        <>
            <main className={styles.entradas}>

                <section className={styles.containerPrincipal}>
                    <div className={styles.imagemInicio}>
                    <img src={inicioImagem} alt="Logotipo Anotando ao lado do slogan principal."/>
                    </div>

                    <div className={styles.slogan}>
                    <h1>
                        Toda grande ideia começa <span className={styles.efeito}>ANOTANDO</span>.
                    </h1>
                    <p>E o primeiro passo para realizar é escrever o que se sonha!</p>
                    <button className={styles.btnComecar} onClick={abrirCadastro}>
                        Comece a anotar aqui!
                    </button>
                    </div>
                </section>         
            </main>
        </>
    )
}

export default TextoMain;
