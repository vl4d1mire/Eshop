import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCountItems } from '../../redux/cart/cartSlice';

import BurgerMenu from '../burger/burger-menu.component';
import BurgerIcon from '../burger/burger-icon.component';
import Search from '../search/search.component';
import './header.styles.scss';

function Header() {
  const quantity = useSelector(getCountItems);
  const [open, setOpen] = useState(false);

  const node = useRef();

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  }

  useOnClickOutside(node, () => setOpen(false));

  return (
    <header className="header">
      <div className="header__row">
        <nav className="header__icons icons">
          <div className="icons__search">
            <div className="icons__search-logo">
              <Link to="/">
                <img alt="Logo" src="/images/logo/header_logo.svg" />
              </Link>
            </div>
            <div className="icons__search-logo">
              <Search />
            </div>
          </div>
          <div className="icons__info">
            <div className="icons__info-logo" ref={node}>
              <BurgerIcon open={open} setOpen={setOpen} />
              <BurgerMenu open={open} setOpen={setOpen} />
            </div>
            <div className="icons__info-logo">
              <Link to="/">
                <img alt="Profile" src="/images/logo/logo_conts.svg" />
              </Link>
            </div>
            <div className="icons__info-logo basket">
              <div className="basket__quantity">
                <div className="basket__quantity-num">{quantity || 0}</div>
              </div>
              <Link to="/cart">
                <img alt="Basket" src="/images/logo/logo_basket.svg" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
