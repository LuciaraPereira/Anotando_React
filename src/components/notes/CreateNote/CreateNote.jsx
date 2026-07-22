import { useState } from "react";
import Button from "../Button/Button";
import styles from './CreateNote.module.css';
import api from "../../../services/api";

export default function CreateNote({ carregarNotas, editando, setEditando }){
  const [mostrarForm, setMostrarForm] = useState(false);
  const [title, setTitle] = useState(editando ? editando.title : "");
  const [description, setDescription] = useState(editando ? editando.description : "");
  const formVisivel = mostrarForm || !!editando;
  
  
  const user = JSON.parse(localStorage.getItem("usuario"));

  function enviarNota(e){
    e.preventDefault();
    api.post(`/notas/criar/${user.id}`, {
    title,
    description
})
    .then((response) => {
       console.log(response.data);
       setTitle("");
       setDescription("");


       carregarNotas();
       
    })
    .catch((erro) => {
    console.log(erro.response.status);
    console.log(erro.response.data);
     });

  }

  async function editarNota() {
  
    try{
      await api.put(`notas/${user.id}/notas/${editando.id}`, {title, description});
        setTitle("");
        setDescription("");
        setEditando(null);
        setMostrarForm(false);
        carregarNotas();
     }
    catch(erro){
       console.log(erro);
    }
  }




    return(
        <>
        <section className={styles.cont}>
        { formVisivel ? (
        <>
          <Button
            texto="Fechar"
            type="button"
            onClick={() => {
              setMostrarForm(false);
              setEditando(null);
              setTitle("");
              setDescription("");
            }}
          />

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              if (editando) {
                editarNota();
              } else {
                enviarNota(e);
              }
            }}
          >
            <input
              placeholder="Título"
              className={styles.inputCreate}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Descrição"
              className={styles.descricao}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <Button
              texto={editando ? "Salvar" : "Enviar"}
              type="submit"
              className={styles.enviar}
            />
          </form>

          
        </>
      ) : (
        <Button
          texto="Criar nova anotação"
          type="button"
          onClick={() => setMostrarForm(true)}
        />
      )}
        </section>
            
        </>
    );
}

