import { useEffect, useState } from "react";
import styled from "styled-components";
//import { popularProducts } from '../data';
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
`;

export default function Products({ cat, filters, sort }) {
   
       const [products, setProducts] = useState([]);
       const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");                
                setProducts(res.data);
            } catch (err) { 
               console.log(err);
            };
        };
        getProducts();
    }, [cat]);
        
    // fetch('http://localhost:5000/api/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))

    useEffect(() => {
        cat && setFilteredProducts(products.filter((item) => {
                return Object.entries(filters).every(([key, value]) => {
                return item[key].includes(value);
            });
        }));
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === 'low to high') {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    },[sort])

    return (
        <Container>             
            { cat ? filteredProducts.map(item => (
                <Product item={item} key={item._id} />                
            )) : products.slice(0, 8).map(item => (
                <Product item={item} key={item._id} />                
            ))}
        </Container>
    )
}