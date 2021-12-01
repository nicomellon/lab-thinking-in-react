import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable(props) {
  const [products, setProducts] = useState({
    allProducts: props.products,
    filteredProducts: props.products,
  });

  const filterProducts = (filterParams) => {
    const { query, onlyAvailable } = filterParams;
    // filter by name
    const filterCb = (product) =>
      product.name.toLowerCase().includes(query.toLowerCase());
    let filtered = products.allProducts.filter(filterCb);
    // if checkbox is ticked show only available
    if (onlyAvailable) filtered = filtered.filter((prod) => prod.stocked);
    //update products list with results of filter
    setProducts({
      allProducts: products.allProducts,
      filteredProducts: filtered,
    });
  };

  return (
    <div className="filterable">
      <SearchBar searchCb={filterProducts} />
      <ProductTable products={products.filteredProducts} />
    </div>
  );
}

export default FilterableProductTable;
