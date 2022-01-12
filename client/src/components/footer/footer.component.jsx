import React from 'react'
import FooterBottom from '../footer-bottom/footer-bottom.component'
import SubscribeForm from '../subscribe-form/subscribe-form.component'

import './footer.styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__subscribe subscribe">
                <div className="subscribe-wrapper">
                    <div className="subscribe__quota quota">
                        <div className="quota__logo">
                            <img alt="" src="https://i.ibb.co/5j9dk32/img-12.png"/>
                        </div>
                        <div className="quota__text">
                            “Vestibulum quis porttitor dui! Quisque viverra
                            nunc mi, <em>a pulvinar purus
                            condimentum“</em>
                        </div>
                    </div>
                    <SubscribeForm/>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    )
}

export default Footer
