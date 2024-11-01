import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Registrar } from "../../componentes/Acciones/Registrar";
import { Listar } from "../../componentes/Acciones/Listar";
import { Admin } from "../../componentes/Acciones/Admin";
import { Actualizar } from "../../componentes/Acciones/Actualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>

          <Route path="/registrar" element={<Registrar/>}/>
          <Route path="/listar" element={<Listar/>}/>
          <Route path="/admin" element={<Admin/>}/>

          <Route path="/actu:codigo" element={<Actualizar/>}/>

          <Route path="/acerca" element={<Acerca/>}/>

          <Route path="*" element={<NoEncontrado/>}/>
            
        </Routes>
    )
}