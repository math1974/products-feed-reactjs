import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styled from 'styled-components'

import { get as ProductList } from '../../services/Products'

import Loading from '../../components/Loading'

import './style.css';

const Title = Styled.span`
	font-size: 22px;
	margin-top: 16px;
	font-weight: bold;
`;
const Paragraph = Styled.p`
	font-weight: 500;
	font-size: 18px;
`;

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			const response = await ProductList({
				url: `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
			});

			setProduct(response);

			setLoading(false);
		};

		init();
	}, [params]);

	if (loading) {
		return (
			<div className="ds-flex ds-flex__justify--center">
				<Loading/>
			</div>
		)
	}

	return (
		<div>
			{
				product ? (
					<div className="ds-flex">
						<div className="ds-flex ds-flex__item flex-column">
							{
								product.fotos && product.fotos.map((item, index) => {
									return (
										<div key={index}>
											<img src={item.src} alt={item.titulo} className="container__image"/>
										</div>
									)
								})
							}
						</div>

						<div className="ds-flex ds-flex__item flex-column" style={{ marginLeft: '32px' }}>
							<div>
								<Title>{ product.nome }</Title>
							</div>

							<div className="ds-flex" style={{ marginTop: '16px' }}>
								<div className="container__item-price">
									R$ { product.preco }
								</div>
							</div>

							<Paragraph>{ product.descricao }</Paragraph>
						</div>
					</div>
				) : (
					<Title>Produto não encontrado</Title>
				)
			}
		</div>
	)
}

export default Product
