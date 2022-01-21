import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

function EmptyBasket() {
	const stylesEmptyBasket = {
		textAlign: 'left',
		width: '100%',
		height: '100%',
		paddingTop: '75px',
		paddingLeft: '14%',
	};
	return (
		<div className="empty-basket" style={stylesEmptyBasket}>
			<h2>There is nothing in the basket yet.</h2>
			<p>Start from the home page to find something specific.</p>
			<NavLink to="/">
				<CustomButton style={{ marginTop: '10px' }}>GO TO HOME</CustomButton>
			</NavLink>
		</div>
	);
}

export default EmptyBasket;
