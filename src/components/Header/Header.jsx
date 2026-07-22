import styles from "./Header.module.css";
import logo from "../../assets/img/logo-anotando.png"

function Header({abrirLogin, abrirCadastro, sair, logado=false}){
   
    return(
        <>
            <header>
                <div className={styles.logo}>
                    <img src={logo} alt="Logotipo Anotando: Nuvem azul integrada a dispositivos e pastas digitais."/>                   
                </div>
                    <nav>
                        <ul>
                            {logado ? (  <li> <button className={`${styles.loginBtn} ${styles["btns-inicio"]}`} onClick={sair}>Sair</button></li> ) : (<> <li> <button className={`${styles.loginBtn} ${styles["btns-inicio"]}`} onClick={abrirLogin}>Login</button></li>
                            <li> <button className={`${styles.cadastroBtn} ${styles["btns-inicio"]}`} onClick={abrirCadastro}>Cadastre-se</button> </li> </>)}
                            
                        </ul>
                    </nav> 

            </header>
        </>
    )
}

export default Header;