import React from "react";
import Card from "../.././components/Card/card.js";
import {useLocation, useParams} from "react-router-dom";

const Details = () => {
    const {params} = useParams();
    const {state}= useLocation();
    console.warn('params',params,'state',state);
    return (
        <div>
            <h1>Detalles del Producto</h1>
            <Card item={state} />
        </div>
    )
}

export default Details;