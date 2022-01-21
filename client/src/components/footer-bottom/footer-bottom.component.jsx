import React from 'react';
import FooterNav from '../footer-nav/footer-nav.component';

import './footer-bottom.styles.scss';

function FooterBottom() {
	return (
		<div className="footer__bottom bottom">
			<div className="bottom__copy">© 2021 Brand All Rights Reserved.</div>
			<FooterNav />
		</div>
	);
}

export default FooterBottom;
