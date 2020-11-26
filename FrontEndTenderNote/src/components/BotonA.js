import React from 'react';
import './styles/BotonA.css';
import papelera from '../images/papelera.png'
import lapiz from '../images/lapiz.png'
import adicionar from '../images/adicionar.png'
import cancelar from '../images/cancelar.png'
import useWindowSize from '../hooks/useWindowSize';
import { Link } from 'react-router-dom'


const BotonA = ({ mostrar, onEdit, onDelete, close, onClick}) => {
	const size = useWindowSize();
	return (
		<>
			{mostrar && (
				<>
					<button 
					style={{left:size.width*0.8+size.height*0.01}}
					className="fab-edit" onClick={onEdit}>
            <img src={lapiz} className="tm-icono"/>
          </button>

					<button style={{left:size.width*0.8+size.height*0.01}} className="fab-delete" onClick={onDelete}>
            <img src={papelera}className="tm-icono"/>
          </button>
				</>
			  )}
        
			<button
				className="fab"
				style={{left:size.width*0.8}}
				onClick={() => {
					if (mostrar) {
						close();
					} else {
						onClick();
					}
				}}
			>
				{mostrar ? <img src={cancelar} className="tm-icono"/> : <img src={adicionar} className="tm-icono"/>}
			</button>
		</>
	);
};
export default BotonA;