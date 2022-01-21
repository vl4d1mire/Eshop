import React from 'react';
import PropTypes from 'prop-types';
import './info-items.styles.scss';

function InfoItems({ image, title, text }) {
	return (
		<div className="info__items">
			<div className="info__items-logo">
				<img alt="" src={image} />
			</div>
			<div className="info__items-title">{title}</div>
			<div className="info__items-text">
				<p>{text}</p>
			</div>
		</div>
	);
}

InfoItems.defaultProps = {
	image: '',
	title: '',
	text: '',
};

InfoItems.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};

export default InfoItems;
