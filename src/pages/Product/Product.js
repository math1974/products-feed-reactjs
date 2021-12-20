import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get as ProductList } from '../../services/products'

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const init = async () => {
			const response = await ProductList({
				url: `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
			});

			setProduct(response);
		}

		init();
	}, [params]);

	return (
		<>
			<h1>MEU PRODUTO FULL</h1>

			<p>{ JSON.stringify(product) }</p>
		</>
	)
}

export default Product
