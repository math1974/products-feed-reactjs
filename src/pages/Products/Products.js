import React, { useState, useEffect } from 'react'

import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';

import { get as ProductList } from '../../services/Products';

import './style.css';

const Products = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const init = async () => {
		const response = await ProductList({ url: 'https://ranekapi.origamid.dev/json/api/produto' });

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
				) : products.length ? (
					<div className="product-container">

						{
							products.map((item, index) => {
								return <ProductCard className="product-container__item" key={index} data={item} />
							})
						}
					</div>
				) : (
					<div className="alert alert-danger">Nenhum produto encontrado</div>
				)
			}
		</>
	)
}

export default Products;
