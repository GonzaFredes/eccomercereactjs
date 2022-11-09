import React, { useState, useRef, useEffect } from "react";
import Card from "../../components/Card/card";
import './homestyles.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const startProducts = useRef(1);
    const endProducts = useRef(20);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetch('https://6367c7d2d1d09a8fa61a60c0.mockapi.io/productos')
                const dataProducts = await data.json();
                setProducts(dataProducts);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);
    console.warn('products', products);


    const handleNext = async () => {
        startProducts.current += 20;
        endProducts.current += 20;
        getProducts(startProducts.current, endProducts.current);
    }

    const handlePrev = async () => {
        startProducts.current -= 20;
        endProducts.current -= 20;
        getProducts(startProducts.current, endProducts.current);
    }

    return (
        <div className="home-container">
            <h1>Home</h1>
            {isLoading ? (
                <div>Cargando productos...</div>
            ) : (
                <>
                    <div className="list-container">
                        {products.map(product => (
                            <Card key={product.id} item={product} />
                        ))}
                    </div>
                    <div className="button-container">
                        <button disabled={startProducts.current <= 1 || isLoading} onClick={handlePrev}>Previous</button>
                        <button disabled={endProducts.current >= 300 || isLoading} onClick={handleNext}>Next</button>
                    </div>
                </>
            )}
        </div>
    )
}


export default Home;