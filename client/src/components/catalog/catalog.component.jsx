import React from "react";
import CatalogFilter from "../catalog-filter/catalog-filter.component";
import ProductList from "../product-list/product-list.component";
import Pagination from "../pagination/pagination.component";
import './catalog.styles.scss'

const Catalog = () => {
  return (
      <section className="catalog">
          <CatalogFilter/>
          <ProductList/>
          <Pagination/>
      </section>
  )
}

export default Catalog
