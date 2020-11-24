import React from 'react';
import './styles/Productos.css'
const Product = ({ onClick, precio, cantidad, nombre, foto }) => {
	return (
		<button onClick={onClick} className="btn card text-dark m-1 mb-3 d-inline ejez" style={{width: "47%"}}>
			<h6>{nombre}</h6>
            <img src={foto} className="card-img-top" alt={nombre} style={{width:'18vmax',height:'18vmax'}} />
			<div className="card-body">
				<div className="clearfix">
                    <div className="float-left">
                        Cant:{cantidad}
                    </div>
                    <div className="float-right">
                        ⠀${precio}
                    </div>
                </div>
			</div>
		</button>
	);
};

export default Product;