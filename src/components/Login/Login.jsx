import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"
import api from "../../services/api";
import { useState } from "react";


function Login({voltarHome}){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


 function logar(e) {
    e.preventDefault();

    api.post("/usuarios/login", {
       email, senha 
      })
          .then((response) => {
            localStorage.setItem("usuario", JSON.stringify(response.data))
            console.log(response.data)
            navigate("/notas");
          })
          .catch((erro) => {
              console.log(erro);
              alert("E-mail ou senha incorretos!"); 

              setEmail("");
              setSenha("");
          });  
 }
    return(
        <>
            <section className={`${styles.login} ${styles.loginCadastro} ${styles.hide}`}>
                    <button className={styles.btnCancelar} aria-label="Voltar" onClick={voltarHome}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={styles.icon} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
            
                    <h2 className={styles.plc}>Faça seu login</h2>
                    <form id="form-login" onSubmit={logar}>
                      <label htmlFor="email-login" className={styles.ocultaLabel}>
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="E-mail"
                        id="email-login"
                        required
                        title="E-mail"

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
            
                      <label htmlFor="senha-login" className={styles.ocultaLabel}>
                        Senha
                      </label>
                      <input
                        type="password"
                        placeholder="Senha"
                        id="senha-login"
                        required
                        minLength={8}
                        title="Senha"

                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      />
            
                      <button type="submit" className={styles.btnLc}>
                        Entrar
                      </button>
                    </form>
                  </section>
        </>
    )
}

export default Login;