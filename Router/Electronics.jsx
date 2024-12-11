import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElectronicProduct } from './ActionApi';

export default function Electronics() {
    const electronics = useSelector((state) => state.products.electronics);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchElectronicProduct());
    }, [dispatch]);

    return (
        <div>
            <h1>Electronics</h1>
            {electronics.map((el, i) => (
                <Link key={i} to={`/ProductDetails/${el.id}`}>
                    {el.title}
                </Link>
            ))}
        </div>
    );
}