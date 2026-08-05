import "./MainLogin.css";
import Login from "../Login/Login";
import { useState } from "react";
import TextoMain from "../TextoMain/TextoMain";
import Cadastro from "../Cadastro/Cadatro";
import Header from "../Header/Header";

function MainLogin() {
  const [viewMode, setViewMode] = useState("none");

  function abrirLogin (){
    setViewMode("login")
  }

   function abrirCadastro() {
    setViewMode("cadastro");
  }
  
  function voltarHome() {
    setViewMode("none");
  }

  return (
   <>
      <main>
        {viewMode === "none" && (<TextoMain abrirCadastro={abrirCadastro}/>)}

        {viewMode === "login" && <Login voltarHome={voltarHome}/>}

       {viewMode === "cadastro" && ( <Cadastro voltarHome={voltarHome} irParaLogin={abrirLogin} /> )}

        <Header abrirLogin={abrirLogin} abrirCadastro={abrirCadastro} />
      </main>  
   </>
  );
}

export default MainLogin; 