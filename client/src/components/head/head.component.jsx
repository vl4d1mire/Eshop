import React from 'react';
import './head.styles.scss';

function Head() {
	return (
		<div className="content__head head">
			<div className="head__image">
				<img alt="Brand" src="/images/brands/img_1.png" />
			</div>
			<div className="head__info">
				<div className="head__body">
					<div className="head__rect" />
					<div className="head__text">
						<div className="head__text-title">THE BRAND</div>
						<div className="head__text-subtitle">
							OF LUXERIOUS <span>FASHION</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Head;
