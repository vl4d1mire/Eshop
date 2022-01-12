import React from 'react'
import './icons-logo.styles.scss'

const IconsLogo = ({ link, img, alt }) => {
  return (
      <div className="icons-logo">
          <a href={link} target='_blank' rel='noreferrer'>
              <img alt={alt} src={img}/>
          </a>
      </div>
  )
}

export default IconsLogo