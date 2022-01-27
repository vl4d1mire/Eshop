import React from 'react';
import PropTypes from 'prop-types';
import './icons-logo.styles.scss';

function IconsLogo({ link, img, alt }) {
  return (
    <div className="icons-logo">
      <a href={link} target="_blank" rel="noreferrer">
        <img alt={alt} src={img} />
      </a>
    </div>
  );
}

IconsLogo.defaultProps = {
  link: '',
  img: '',
  alt: '',
};

IconsLogo.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
};

export default IconsLogo;
