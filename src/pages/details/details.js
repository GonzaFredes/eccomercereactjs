import React from "react";
import Card from "../.././components/Card/card.js";
import { useLocation, useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import './detailsstyles.css';

const Details = () => {
    const { params } = useParams();
    const { state } = useLocation();
    console.warn('params', params, 'state', state);
    return (
        <div>
            <div className="detailTitle">
                <h1>Detalles del Producto</h1>
            </div>
            <div className="cardDescription">
                <div>
                    <Card item={state} />
                </div>
                <div>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default Details;