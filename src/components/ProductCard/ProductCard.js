import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Styled from 'styled-components'

import './style.css';

const ProductCard = ({ data, ...props }) => {
	const navigate = useNavigate();
	const [image, setImage] = useState('');

	useEffect(() => {
		const thumbPicture = data.fotos[0];

		if (!thumbPicture) {
			return;
		}

		setImage(thumbPicture);
	}, [data])

	const Title = Styled.span`
		font-size: 20px;
		margin-top: 16px;
		font-weight: bold;
	`;

	const handleClick = () => {
		const url = `/products/${data.id}`;

		navigate(url);
	};


    return (
		<>
			<div {...props} style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={handleClick}>
				<img alt={image && image.titulo} src={image && image.src} style={{ width: '100%' }}/>

				<Title>{ data.nome }</Title>
			</div>
		</>
	)
};

export default ProductCard;
