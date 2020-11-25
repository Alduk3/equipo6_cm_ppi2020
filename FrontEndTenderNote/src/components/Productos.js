import React from 'react';
import './styles/Productos.css'
const Product = ({ onClick, precio, cantidad, nombre, foto }) => {
	return (
		<button onClick={onClick} className="btn card text-dark m-1 mb-3 d-inline ejez shadow-sm container-fluid" style={{width: "47%"}}>
			<h6 className="font-weight-bold">{nombre}</h6>
            <img src={foto} className="card-img-top shadow-sm rounded" alt={nombre} style={{width:'18vmax',height:'18vmax'}} />
			<div className="card-body">
				<div className="clearfix">
                    <div className="float-left font-weight-bold d-block">
                        Cantidad: {cantidad}
                    </div>
                    <div className="float-left font-weight-bold d-block">
                      Precio: ${precio}
                    </div>
                </div>
			</div>
		</button>
	);
};

export default Product;