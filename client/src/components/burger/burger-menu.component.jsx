import React from 'react'
import './burger-menu.styles.scss'

const BurgerMenu = ({open, setOpen}) => {
    return (
        <div className={`burger__menu menu ${ open ? 'active' : ''} }`}>
            <div className="container">
                <div className="menu__wrap"/>
                <div className="menu__items">
                    <div className="menu__icon_close">
                        <div className="menu__icon" onClick={() => setOpen(!open)}>X</div>
                    </div>
                    <div className="menu__column">
                        <div className="menu__title menu__title_color">
                            MENU
                        </div>
                        <div className="menu__cart">
                            <div className="menu__cart menu__title">
                                MAN
                            </div>
                            <div className="menu__cart-item">
                                <ul>
                                    <li>Accessories</li>
                                    <li>Bags</li>
                                    <li>Denim</li>
                                    <li>T-Shirts</li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu__cart">
                            <div className="menu__cart menu__title">
                                WOMAN
                            </div>
                            <div className="menu__cart-item">
                                <ul>
                                    <li>Accessories</li>
                                    <li>Jackets
                                        & Coats
                                    </li>
                                    <li>Polos</li>
                                    <li>T-Shirts</li>
                                    <li>Shirts</li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu__cart">
                            <div className="menu__cart menu__title">
                                KIDS
                            </div>
                            <div className="menu__cart-item">
                                <ul>
                                    <li>Accessories</li>
                                    <li>Polos</li>
                                    <li>T-Shirts</li>
                                    <li>Shirts</li>
                                    <li>Bags</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BurgerMenu