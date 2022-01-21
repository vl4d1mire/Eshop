import React from 'react';
// import PropTypes from 'prop-types';

function BurgerIcon({ open, setOpen }) {
	return (
		<button
			type="button"
			className="burger__btn"
			onClick={() => setOpen(!open)}
		>
			<div className={`bar1 ${open ? 'change' : ''}`} />
			<div className={`bar2 ${open ? 'change' : ''}`} />
			<div className={`bar3 ${open ? 'change' : ''}`} />
		</button>
	);
}

// BurgerIcon.defaultProps = {
// 	setOpen: () => {},
// };
// 	open: 'false',

// BurgerIcon.propTypes = {
// 	open: PropTypes.bool,
// 	setOpen: PropTypes.func,
// };

export default BurgerIcon;
