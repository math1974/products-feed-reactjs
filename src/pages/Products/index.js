import React, { useState, useEffect } from 'react'

import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';

import { get as ProductList } from '../../services/products';

import './style.css';

const Products = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const init = async () => {
		const response = await ProductList({ url: 'https://ranekapi.origamid.dev/json/api/produto' });

		console.log(response, 'response');

		setProducts(response);

		setLoading(false);
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<>
			{
				loading ? (
					<div className="ds-flex ds-flex__justify--center">
						<Loading/>
					</div>
				) : products.length ? products.map((item, index) => {
					return <ProductCard key={index} data={item} />
				}) : (
					<div className="alert alert-danger">Nenhum produto encontrado</div>
				)
			}
		</>
	)
}

export default Products;
