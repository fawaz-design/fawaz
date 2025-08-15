
import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { products } from "./data";
import CartSummary from "./components/CartSummary";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

const PRODUCTS_PER_PAGE = 4;

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map(p => p.category)));
    return cats;
  }, []);

  const filtered = useMemo(() => {
    let filtered = products;
    if (category !== "All") filtered = filtered.filter(p => p.category === category);
    if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    return filtered;
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  useMemo(() => { setPage(1); }, [search, category]);

  return (
    <Router>
      <div className="app-container">
        <CartSummary cart={cart} />
        <header className="app-header">
          <h1 className="brand-title">FurniShop</h1>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <Home
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              categories={categories}
              paginated={paginated}
              handleAddToCart={handleAddToCart}
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          } />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="app-footer">
          <p>© 2025 FurniShop. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
