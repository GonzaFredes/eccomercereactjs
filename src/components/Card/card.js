import React from "react";
import './cardstyles.css'

const Card = ({ item, goToDetails}) => {
    const { id, producto, descripcion, precio, imagen} = item;
    
    return (
        <div onClick={() => goToDetails(item)} className="card">
            <div className="card-image-container">
                <img className="card-image" src={item.imagen} alt={item.producto} />
            </div>
            <div className="card-content">
                <p className='card-name'>{producto}</p>
                <p className='card-price'>{precio}</p>
                <p className='card-price'>#{id}</p>
            </div>
        </div>
    )
};

export default Card;
