import { useDispatch, useSelector } from 'react-redux';
import { loadExactPage, loadNewPage } from '../../redux/products/productsSlice';

import './pagination.styles.scss';

function Pagination() {
  const currentPage = useSelector((state) => state.products?.currentPage);
  const totalPage = useSelector((state) => state.products?.totalPage);
  const maxPageNumberLimit = useSelector(
    (state) => state.products?.maxPageNumberLimit
  );
  const minPageNumberLimit = useSelector(
    (state) => state.products?.minPageNumberLimit
  );
  const dispatch = useDispatch();

  const pages = [];

  for (let i = 1; i < totalPage; i += 1) {
    pages.push(i);
  }

  const renderPageNumbers = pages
    .filter((number) => number !== 1)
    .map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit - 1) {
        return (
          <li
            key={number}
            id={number}
            className={currentPage === number ? 'active' : null}
            onClick={() => dispatch(loadExactPage({ page: number }))}
            aria-hidden="true"
          >
            {number}
          </li>
        );
      }
      return null;
    });

  let pageIncrementBtn = null;

  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={() => dispatch(loadNewPage({ page: 1 }))} aria-hidden="true">
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;

  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li
        onClick={() => dispatch(loadNewPage({ page: -1 }))}
        aria-hidden="true"
      >
        &hellip;
      </li>
    );
  }

  const firstPage = (
    <li
      className={currentPage === 1 ? 'active' : null}
      onClick={() => dispatch(loadExactPage({ page: 1 }))}
      aria-hidden="true"
    >
      1
    </li>
  );

  const lastPage = (
    <li
      className={currentPage === pages.length + 1 ? 'active' : null}
      onClick={() => dispatch(loadExactPage({ page: pages.length + 1 }))}
      aria-hidden="true"
    >
      {pages.length + 1}
    </li>
  );

  return (
    <div className="catalog__pagination pagination">
      <div className="pagination-wrap">
        <button
          type="button"
          className="pagination__arrow pagination-prev"
          onClick={() => dispatch(loadNewPage({ page: -1 }))}
          disabled={currentPage === pages[0]}
          style={
            currentPage === pages[0]
              ? { opacity: 0.1, cursor: 'default' }
              : null
          }
        >
          <div className="bar1" />
          <div className="bar2" />
        </button>
        <div className="pagination__list">
          {firstPage}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {lastPage}
        </div>
        <button
          type="button"
          className="pagination__arrow pagination-next"
          onClick={() => dispatch(loadNewPage({ page: 1 }))}
          disabled={currentPage === pages.length + 1}
          style={
            currentPage === pages.length + 1
              ? { opacity: 0.1, cursor: 'default' }
              : null
          }
        >
          <div className="bar1" />
          <div className="bar2" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
