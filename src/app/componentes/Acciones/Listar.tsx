import {useState } from "react";
import {ARREGLO_PELICULAS } from "../../mocks/Peliculas-mocks";
import {Pelicula} from "../../modelos/Peliculas";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/Dominios/DomGenero";

export const Listar = () => {

  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombre = (valor: string)=>{
    for(const objGene of ARREGLO_PELICULA_GENERO){
      if(objGene.codGenero==valor){
        return objGene.nombreGenero
      }
    }
  };

  return (
    <>
    <div className="pt-4 d-flex justify-content-center">
     <div className="col-md-8">
      <div className="bd-example">
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre Pelicula</th>
              <th scope="col">Genero</th>
              <th scope="col">Protagpnista</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
          <tbody>
            {arrPeliculas.map((miPeli: Pelicula)=>(
              <tr>
              <th>{miPeli.codPelicula}</th>
              <td>{miPeli.nombrePelicula}</td>
              <td>{obtenerNombre(miPeli.codgeneroPelicula)}</td>
              <td>{miPeli.protagonistaPelicula}</td>
              <td>
                <img src={miPeli.imagenPeliculaBase64} alt="no hay" className="imagenListado"/>
                <br />
                {miPeli.imagenPelicula}
              </td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
     </div>
    </div>
    </>
  );
};
