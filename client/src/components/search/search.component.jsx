import { useDispatch } from 'react-redux';
import { filterByValue } from '../../redux/products/productsSlice';
import './search.styles.scss';

function Search() {
  const dispatch = useDispatch();

  function filterByInput(e) {
    const input = e.target.value;
    dispatch(filterByValue({ value: input }));
  }

  return (
    <form className="search">
      <span className="search__input">
        <input type="text" onChange={(e) => filterByInput(e)} />
        <div className="search__logo" />
      </span>
    </form>
  );
}

export default Search;
