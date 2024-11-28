import foto from "../../../assets/img/Yo.jpg";
import billie from "../../../assets/img/Billie.jpg";

export const Acerca = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ width: "18rem", padding: "20px" }}>
            <img src={foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Samuel Caceres</h5>
              <p className="card-text">
                Fundador, Filosofo, Ingenierio, Filantropo, Entusiasta, Directivo, Cooperativo.
              </p>
              <a href="https://www.instagram.com/samcac08/" className="btn btn-primary">
                Redes
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: "18rem", padding: "20px" }}>
            <img src={billie} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Billie Eilish</h5>
              <p className="card-text">
                Co-Fundadora, Cantante, Compositora, Actriz, Bailarina, Ganadora de grammys y nominaciones en diversos premios.
              </p>
              <a href="https://www.instagram.com/billieeilish/" className="btn btn-primary">
                Redes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  