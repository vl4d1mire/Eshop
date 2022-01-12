import React from 'react'
import {filterByValue} from '../../redux/products/productsSlice'
import {useDispatch} from "react-redux"
import './search.styles.scss'

const Search = () => {

    const dispatch = useDispatch()

    function filterByInput(e) {
        let input = e.target.value
        dispatch(filterByValue({value: input}))
    }

    return (
        <form className='search'>
            <span className="search__input">
                <input type="text" onChange={(e) => filterByInput(e)}/>
                <div className='search__logo' />
            </span>
        </form>
    )
}

export default Search

