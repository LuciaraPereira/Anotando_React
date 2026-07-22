import { useState } from "react";
import styles from "./Cadastro.module.css"
import api from "../../services/api";

function Cadastro({voltarHome, irParaLogin}){

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaC, setSenhaC] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    if (senha !== senhaC) {
      alert("As senhas não coincidem!");
      return; 
    }

    api.post("/usuarios", { 
      nome, email, senha
     })
      .then((response) => {
        console.log(response.data)
       
        if (irParaLogin) {
          irParaLogin();
        }
      })
     
      .catch((erro) => {
          console.log(erro)
      })
  }
    return(
        <>
            <section className={`${styles.cadastro} ${styles.loginCadastro} ${styles.hide}`} id="cadastro">
                    <button className={styles.btnCancelar} aria-label="Voltar" onClick={voltarHome}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className={styles.icon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
            
                    <h2 className={styles.plc}>Faça seu Cadastro</h2>
            
                    <form id="form-cadastro" onSubmit={cadastrar}>
                      <label htmlFor="nome-cadastro" className={styles.ocultaLabel}>
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="Nome"
                        id="nome-cadastro"
                        required
                        title="Nome"

                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
            
                      <label htmlFor="email-cadastro" className={styles.ocultaLabel}>
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="E-mail"
                        id="email-cadastro"
                        required
                        title="E-mail"

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
            
                      <label htmlFor="senha-cadastro" className={styles.ocultaLabel}>
                        Senha
                      </label>
                      <input
                        type="password"
                        placeholder="Senha"
                        id="senha-cadastro"
                        required
                        minLength={3}
                        title="Senha"

                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      />
            
                      <label htmlFor="confirme-senha" className={styles.ocultaLabel}>
                        Confirme sua senha
                      </label>
                      <input
                        type="password"
                        placeholder="Confirme sua senha"
                        id="confirme-senha"
                        required
                        minLength={3}
                        title="Confirme senha"

                        value={senhaC}
                        onChange={(e) => setSenhaC(e.target.value)}
                      />
            
                      <button type="submit" className={styles.btnLc}>
                        Cadastrar
                      </button>
            
                      <p id="hide"></p>
                    </form>
                  </section>
        </>
    )
}

export default Cadastro;