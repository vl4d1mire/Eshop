import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadExactPage, loadNewPage } from '../../redux/products/productsSlice';

import './pagination.styles.scss';

function Pagination() {
	const currentPage = useSelector((state) => state.products?.currentPage);
	const totalPage = useSelector((state) => state.products?.totalPage);
	// const countPerPage = useSelector((state) => state.products?.countPerPage);
	// const currentCount = useSelector((state) => state.products?.currentCount);
	const maxPageNumberLimit = useSelector(
		(state) => state.products?.maxPageNumberLimit
	);
	const minPageNumberLimit = useSelector(
		(state) => state.products?.minPageNumberLimit
	);
	const dispatch = useDispatch();

	const pages = [];

	console.log(typeof totalPage);

	for (let i = 1; i <= totalPage; i++) {
		pages.push(i);
	}

	const renderPageNumbers = pages.map((number) => {
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<li
					key={number}
					id={number}
					onClick={() => dispatch(loadExactPage({ page: number }))}
					className={currentPage === number ? 'active' : ''}
				>
					{number}
				</li>
			);
		}
		return null;
	});

	let pageIncrementBtn;

	if (pages.length > maxPageNumberLimit) {
		pageIncrementBtn = <li>...</li>;
	}

	let pageDecrementBtn;

	if ((pages.length = minPageNumberLimit)) {
		pageDecrementBtn = <li>....</li>;
	}

	return (
		<div className="catalog__pagination pagination">
			<div className="pagination-wrap">
				<button
					type="button"
					className="pagination__arrow pagination-prev"
					onClick={() => dispatch(loadNewPage({ page: -1 }))}
					disabled={currentPage === 1}
					style={currentPage === 1 ? { opacity: 0.1, cursor: 'default' } : null}
				>
					<div className="bar1" />
					<div className="bar2" />
				</button>
				<div className="pagination__list">
					{pageDecrementBtn}
					{renderPageNumbers}
					{pageIncrementBtn}
				</div>
				<button
					type="button"
					className="pagination__arrow pagination-next"
					onClick={() => dispatch(loadNewPage({ page: 1 }))}
					disabled={currentPage === totalPage}
					style={
						currentPage === totalPage
							? { opacity: 0.1, cursor: 'default' }
							: null
					}
				>
					<div className="bar1" />
					<div className="bar2" />
				</button>
			</div>

			{/* { totalPage !== 1 */}
			{/*    ? <CustomButton */}
			{/*        style={{"transform": "translate(10%, 50%)"}} */}
			{/*        onClick={() => handlerLoadMore()} */}
			{/*    > */}
			{/*        Load More */}
			{/*    </CustomButton> */}
			{/*    : '' */}
			{/* } */}
		</div>
	);
}

export default Pagination;
