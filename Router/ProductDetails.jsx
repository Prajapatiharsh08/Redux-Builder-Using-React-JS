import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [state, setState] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setState(data);
            });
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            <h2>{state.title}</h2>
            <img src={state.image} height={200} width={200} alt={state.title} />
            <h2>{state.description}</h2>
        </div>
    );
}