import React from 'react';
import { Link } from 'react-router-dom';

import './title.styles.scss';

function Title() {
	return (
		<div className="title">
			<div className="title__name">NEW ARRIVALS</div>
			<nav className="title__sort">
				<Link to="/">HOME</Link>
				<span> / </span>
				<Link to="/">MEN</Link>
				<span> / </span>
				<Link to="/">NEW ARRIVALS</Link>
			</nav>
		</div>
	);
}

export default Title;
