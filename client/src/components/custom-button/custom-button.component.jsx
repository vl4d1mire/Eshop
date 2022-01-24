import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

function CustomButton({ children, ...otherProps }) {
	return (
		<button type="button" className="custom_button" {...otherProps}>
			{children}
		</button>
	);
}

CustomButton.defaultProps = {
	children: '',
};

CustomButton.propTypes = {
	children: PropTypes.string,
};

export default CustomButton;
