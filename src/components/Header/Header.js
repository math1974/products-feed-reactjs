import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = () => {
    return (
		<div className="header">
			<NavLink className="ds-button ds-button--secondary" style={{ marginRight: '8px' }} to="products">Produtos</NavLink>
			<NavLink className="ds-button ds-button--secondary" to="/about">Contato</NavLink>
		</div>
	)
};

export default Header;
