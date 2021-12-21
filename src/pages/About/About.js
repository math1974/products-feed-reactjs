import React from 'react';
import Styled from 'styled-components';

import './style.css';

const About = () => {
	const Title = Styled.span`
		font-size: 22px;
		margin-top: 16px;
		margin-bottom: 16px;
		font-weight: bold;
	`;
	const Paragraph = Styled.p`
		font-weight: 400;
		font-size: 18px;
		margin: 8px 0;
	`;


	return (
		<div className="ds-flex" style={{ marginTop: '24px' }}>
			<div className="ds-flex ds-flex__item">
				<img src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet-1.jpg" alt='Work Setup' style={{ width: '100%', borderRadius: '4px' }}/>
			</div>

			<div className="ds-flex ds-flex__item flex-column" style={{ marginLeft: '32px' }}>
				<Title>Entre em contato.</Title>

				<Paragraph>Email: MaverickHenrique1010@gmail.com</Paragraph>
				<Paragraph>Telefone: (81) 9 9847-3860</Paragraph>
			</div>
		</div>
	)
}

export default About;
