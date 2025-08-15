import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Home = ({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  paginated,
  handleAddToCart,
  page,
  totalPages,
  setPage
}) => (
  <>
    <SearchBar value={search} onChange={setSearch} />
    <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
    <div className="product-grid">
      {paginated.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
    <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
  </>
);

export default Home;
