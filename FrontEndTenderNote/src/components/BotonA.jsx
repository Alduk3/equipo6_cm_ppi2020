import React from 'react';
import '../BotonA.css';
import useWindowSize from '../hooks/useWindowSize';

const BotonA = ({ mostrar, onEdit, onDelete, close, onClick }) => {
	const size = useWindowSize();
	return (
		<>
			{mostrar && (
				<>
					<button 
					style={{left:size.width*0.8+size.height*0.01}}
					
					className="fab-edit" onClick={onEdit}>✏️</button>
					<button style={{left:size.width*0.8+size.height*0.01}}
					className="fab-delete" onClick={onDelete}>X</button>
				</>
			)}
			<button
				className="BotonA"
				style={{left:size.width*0.8}}
				onClick={() => {
					if (mostrar) {
						close();
					} else {
						onClick();
					}
				}}
			>
				{mostrar ? 'x' : '+'}
			</button>
		</>
	);
};
export default BotonA;