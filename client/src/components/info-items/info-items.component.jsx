import React from 'react'
import './info-items.styles.scss'

const InfoItems = ({image, title, text}) => {
  return (
      <div className="info__items">
          <div className="info__items-logo">
              <img alt="" src={ image }/>
          </div>
          <div className="info__items-title">{ title }</div>
          <div className="info__items-text">
              <p>{ text }</p>
          </div>
      </div>
  )
}

export default InfoItems