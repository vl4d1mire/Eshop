import { useState } from 'react';

import SelectItem from '../select-item/select-item.component';
import filterLogo from '../../assets/logo-filter.png';
import FilterMenu from '../filter-menu/filter-menu.component';

import './catalog-filter.styles.scss';

function CatalogFilter() {
  const [filterTitles] = useState({
    titles: [
      {
        id: 1,
        name: 'trending now',
      },
      {
        id: 2,
        name: 'size',
      },
      {
        id: 3,
        name: 'price',
      },
    ],
  });

  const { titles } = filterTitles;

  return (
    <div className="catalog__filter filter">
      <div className="filter-wr">
        <div className="filter__btn">
          <div className="filter__title">FILTER</div>
          <div
            className="filter__logo"
            style={{ backgroundImage: `url(${filterLogo})` }}
          />
          <FilterMenu />
        </div>
        <div className="filter__select select">
          <div className="select-wrap">
            {titles.map(({ id, name }) => (
              <SelectItem key={id} name={name.toUpperCase()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
