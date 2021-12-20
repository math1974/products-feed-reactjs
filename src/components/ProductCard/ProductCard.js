import React from 'react';

import './style.css';

const ProductCard = ({ data }) => {
    return (
		<>
			<div className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
				<h3>{ data.nome }</h3>
			</div>
		</>
	)
};

export default ProductCard;
