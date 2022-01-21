import React from 'react';

function Loader() {
	return (
		<div
			className="loader"
			style={{ width: '200px', height: '200px', margin: '0 auto' }}
		>
			<img src="/images/spinner.gif" alt="spinner" />
		</div>
	);
}

export default Loader;
