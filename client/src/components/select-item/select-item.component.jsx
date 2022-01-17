import React from 'react'
import logo from '../../assets/arrow_down.svg'
import SelectMenu from '../select-menu/select-menu.component'
import './select-item.styles.scss'

const SelectItem = ({ name }) => {

    return (
        <div className="select__item">
            <span>{ name }</span>
            { name === 'SIZE' && <SelectMenu/>}
            <div className="select__logo" style={{backgroundImage: `url(${logo})`}}/>
        </div>
    )
}

export default SelectItem

