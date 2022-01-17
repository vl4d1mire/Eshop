import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    loadData,
    loadExactPage,
    loadNewPage,
} from '../../redux/products/productsSlice'

import CustomButton from "../custom-button/custom-button.component";
import './pagination.styles.scss'

const Pagination = () => {

    const currentPage = useSelector(state => state.products?.currentPage)
    const totalPage = useSelector(state => state.products?.totalPage)
    const countPerPage = useSelector(state => state.products?.countPerPage)
    const currentCount = useSelector(state => state.products?.currentCount)
    const maxPageNumberLimit = useSelector(state => state.products?.maxPageNumberLimit)
    const minPageNumberLimit = useSelector(state => state.products?.minPageNumberLimit)
    const dispatch = useDispatch()

    const pages = []

    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }

    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={ () => dispatch(loadExactPage({page: number})) }
                    className={currentPage === number ? 'active': ''}
                >
                    {number}
                </li>
            )
        } else {
            return null
        }
    })

    let pageIncrementBtn

    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={() => dispatch(loadNewPage({page: 1}))}>.....</li>
    }

    const handlerLoadMore = () => {
        // dispatch(loadData({count: pages.length, counterPerPage: countPerPage + 3}))
    }

    return (
        <div className="catalog__pagination pagination">
            <div className="pagination-wrap">
                    <button
                        className="pagination__arrow pagination-prev"
                        onClick={() => dispatch(loadNewPage({page: -1}))}
                        disabled={ currentPage === 1 }
                        style={currentPage === 1 ? {"opacity": 0.1, "cursor": "default"} : null}
                    >
                            <div className="bar1"/>
                            <div className="bar2"/>
                    </button>
                <div className="pagination__list">
                    {renderPageNumbers}
                    {/*{pageIncrementBtn}*/}
                </div>
                    <button
                        className="pagination__arrow pagination-next"
                        onClick={() => dispatch(loadNewPage({page: 1}))}
                        disabled={ currentPage === totalPage }
                        style={ currentPage === totalPage ? {"opacity": 0.1, "cursor": "default"} : null}
                    >
                            <div className="bar1"/>
                            <div className="bar2"/>
                    </button>
            </div>

            {/*{ totalPage !== 1*/}
            {/*    ? <CustomButton*/}
            {/*        style={{"transform": "translate(10%, 50%)"}}*/}
            {/*        onClick={() => handlerLoadMore()}*/}
            {/*    >*/}
            {/*        Load More*/}
            {/*    </CustomButton>*/}
            {/*    : ''*/}
            {/*}*/}
        </div>
    )
}

export default Pagination

function isLastPages(current, total) {
    let computeValue = Math.ceil(total / current)
    return current === computeValue
}
