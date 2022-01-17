import React from 'react'
import FilterList from '../filter-list/filter-list.component'
import filterLogo from '../../assets/logo_filter_red.svg'

import './filter-menu.styles.scss'

const FilterMenu = () => {
    return (
        <div className="filter__menu menu">
            <div className="menu__title">
                <button>FILTER</button>
                <div className="filter__logo" style={{backgroundImage: `url(${filterLogo})`}}/>
            </div>
            <FilterList/>
        </div>
    )
}

export default FilterMenu
