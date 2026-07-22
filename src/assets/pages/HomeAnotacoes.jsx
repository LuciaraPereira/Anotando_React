import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import CreateNote from "../../components/notes/CreateNote/CreateNote";
import ViewNotes from "../../components/notes/ViewNotes/ViewNotes";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import api from "../../services/api";


function HomeAnotacao(){
  const navigate = useNavigate();
  
  function fazerLogout() {
    localStorage.removeItem("usuario");
    navigate("/");
  }

   const user = JSON.parse(localStorage.getItem("usuario"));

    const [notas, setNotas] = useState([]);
    const [editando, setEditando] = useState(null);

    function abrirEdicao(nota){
        setEditando(nota);
    }


    const carregarNotas = () => {
        api.get(`/notas/nota/${user.id}`)
            .then((response) => {
                setNotas(response.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    };

    async function excluirNota(notaId){

        try{
           await api.delete(`notas/${user.id}/notas/${notaId}`);
             carregarNotas();
        } 
        catch(erro){
            console.log(erro)
        } 
    }

    
 
    useEffect(() => {
        carregarNotas();
    }, []);


    return(
        <>
          <Header  logado={true} sair={fazerLogout}/>

           <CreateNote 
             key={editando ? editando.id : 'new'} 
             carregarNotas={carregarNotas} 
             editando={editando} 
             setEditando={setEditando} 
           />

          <ViewNotes notas={notas} excluirNota={excluirNota} abrirEdicao={abrirEdicao}/>

          <Footer />
          
        </>
    )
}

export default HomeAnotacao;