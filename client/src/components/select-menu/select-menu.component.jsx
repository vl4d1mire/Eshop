import React from 'react';
import './select-menu.styles.scss';

function SelectMenu() {
	return (
		<div className="select__item-menu active">
			<div className="item-wrap">
				<div className="item__list">
					<input id="size-xs" type="checkbox" />
					<div className="item__checkbox-mark" />
					<label htmlFor="size-xs">XS</label>
				</div>
				<div className="item__list">
					<input id="size-s" type="checkbox" />
					<div className="item__checkbox-mark" />
					<label htmlFor="size-s">S</label>
				</div>
				<div className="item__list">
					<input id="size-m" type="checkbox" />
					<div className="item__checkbox-mark" />
					<label htmlFor="size-m">M</label>
				</div>
				<div className="item__list">
					<input id="size-l" type="checkbox" />
					<div className="item__checkbox-mark" />
					<label htmlFor="size-l">L</label>
				</div>
			</div>
		</div>
	);
}

export default SelectMenu;
