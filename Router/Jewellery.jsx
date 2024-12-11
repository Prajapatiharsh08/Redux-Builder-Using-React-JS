import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJewelleryProduct } from './ActionApi';

export default function Jewellery() {
    const jewellery = useSelector((state) => state.products.jewellery);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJewelleryProduct());
    }, [dispatch]);

    return (
        <div>
            <h1>Jewellery</h1>
            {
                jewellery.map((el, i) => (
                    <Link key={i} to={`/ProductDetails/${el.id}`}>{el.title}</Link>
                ))
            }
        </div>
    );
}