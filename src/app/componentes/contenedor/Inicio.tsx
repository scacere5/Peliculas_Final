import producto1 from "../../../assets/img/producto1.jpg";
import producto2 from "../../../assets/img/producto2.png";
import producto3 from "../../../assets/img/producto3.jpeg";

export const Inicio = () => {
    return (
        <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: '45%', margin: '50px auto' }} 
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={producto1} className="d-block w-100" alt="Imagen del producto 1" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={producto2} className="d-block w-100" alt="Imagen del producto 2" />
                </div>
                <div className="carousel-item">
                    <img src={producto3} className="d-block w-100" alt="Imagen del producto 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
