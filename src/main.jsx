import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Check, ChevronLeft, ChevronRight, Minus, Package, Plus, Search, ShoppingBag, X } from 'lucide-react';
import './styles.css';

const products = [
  {
    id: 1,
    name: 'Everyday Canvas Tote',
    category: 'Accessories',
    price: 38,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    description: 'Structured cotton tote with internal pockets and reinforced handles.'
  },
  {
    id: 2,
    name: 'Ridge Wireless Speaker',
    category: 'Electronics',
    price: 84,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
    description: 'Compact speaker with balanced sound and a splash-resistant shell.'
  },
  {
    id: 3,
    name: 'Soft Knit Pullover',
    category: 'Apparel',
    price: 72,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
    description: 'Midweight pullover made for cool mornings and easy layering.'
  },
  {
    id: 4,
    name: 'Ceramic Pour-Over Set',
    category: 'Home',
    price: 56,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    description: 'Glazed dripper and carafe set for clean, consistent coffee brewing.'
  },
  {
    id: 5,
    name: 'Metro Desk Lamp',
    category: 'Home',
    price: 64,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    description: 'Adjustable lamp with warm dimming and a small footprint.'
  },
  {
    id: 6,
    name: 'Trail Daypack',
    category: 'Accessories',
    price: 92,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    description: 'Durable 18L pack with laptop sleeve and weather-ready zippers.'
  },
  {
    id: 7,
    name: 'Linen Camp Shirt',
    category: 'Apparel',
    price: 58,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
    description: 'Breathable short-sleeve shirt with a relaxed, polished fit.'
  },
  {
    id: 8,
    name: 'Portable Power Bank',
    category: 'Electronics',
    price: 49,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80',
    description: 'Slim battery pack with fast charging for phones and earbuds.'
  },
  {
    id: 9,
    name: 'Cotton Waffle Throw',
    category: 'Home',
    price: 68,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',
    description: 'Soft textured blanket for sofas, beds, and quiet evenings.'
  },
  {
    id: 10,
    name: 'Matte Travel Mug',
    category: 'Home',
    price: 34,
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=80',
    description: 'Insulated steel mug with a leak-resistant lid and clean matte finish.'
  },
  {
    id: 11,
    name: 'Noise-Isolating Earbuds',
    category: 'Electronics',
    price: 118,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80',
    description: 'Low-profile earbuds tuned for calls, commutes, and focused work.'
  },
  {
    id: 12,
    name: 'Leather Card Wallet',
    category: 'Accessories',
    price: 46,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
    description: 'Minimal wallet with six card slots and a full-width cash pocket.'
  }
];

const PAGE_SIZE = 6;
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function App() {
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const pageCount = Math.ceil(products.length / PAGE_SIZE);
  const visibleProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return products.slice(start, start + PAGE_SIZE);
  }, [page]);

  const openOrder = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setOrderComplete(false);
  };

  const closeOrder = () => {
    setSelectedProduct(null);
    setQuantity(1);
    setOrderComplete(false);
  };

  return (
    <main className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">Curated essentials</p>
          <h1>Northline Goods</h1>
        </div>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Search products">
            <Search size={20} />
          </button>
          <div className="order-chip" aria-label="Mock ordering available">
            <ShoppingBag size={18} />
            <span>Mock orders</span>
          </div>
        </div>
      </header>

      <section className="shop-intro" aria-label="Shop summary">
        <div>
          <h2>Simple goods for daily routines.</h2>
          <p>Browse a compact catalog of practical products. Pick an item, choose quantity, and place a demo order.</p>
        </div>
        <div className="stats-panel">
          <span>{products.length}</span>
          <p>products across apparel, electronics, home, and accessories</p>
        </div>
      </section>

      <section className="catalog-header" aria-label="Catalog controls">
        <div>
          <p className="eyebrow">Catalog</p>
          <h2>Featured goods</h2>
        </div>
        <p>Page {page} of {pageCount}</p>
      </section>

      <section className="product-grid" aria-label="Product list">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span>{product.category}</span>
            </div>
            <div className="product-body">
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div className="product-footer">
                <strong>{currency.format(product.price)}</strong>
                <button type="button" onClick={() => openOrder(product)}>
                  <ShoppingBag size={18} />
                  <span>Order</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <nav className="pagination" aria-label="Catalog pagination">
        <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1} aria-label="Previous page">
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
          <button
            className={pageNumber === page ? 'active' : ''}
            type="button"
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            aria-current={pageNumber === page ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        ))}
        <button type="button" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={page === pageCount} aria-label="Next page">
          <ChevronRight size={18} />
        </button>
      </nav>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          orderComplete={orderComplete}
          setOrderComplete={setOrderComplete}
          closeOrder={closeOrder}
        />
      )}
    </main>
  );
}

function OrderModal({ product, quantity, setQuantity, orderComplete, setOrderComplete, closeOrder }) {
  const total = product.price * quantity;

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-title">
        <button className="close-button" type="button" aria-label="Close order" onClick={closeOrder}>
          <X size={20} />
        </button>
        {orderComplete ? (
          <div className="success-state">
            <div className="success-icon">
              <Check size={34} />
            </div>
            <h2 id="order-title">Order placed</h2>
            <p>Your demo order for {quantity} x {product.name} is confirmed. No payment was collected.</p>
            <button type="button" onClick={closeOrder}>Done</button>
          </div>
        ) : (
          <>
            <div className="order-heading">
              <Package size={22} />
              <div>
                <p className="eyebrow">Mock checkout</p>
                <h2 id="order-title">Order {product.name}</h2>
              </div>
            </div>
            <div className="order-line">
              <img src={product.image} alt="" />
              <div>
                <strong>{product.name}</strong>
                <span>{currency.format(product.price)} each</span>
              </div>
            </div>
            <div className="quantity-row">
              <span>Quantity</span>
              <div className="stepper">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <output>{quantity}</output>
                <button type="button" onClick={() => setQuantity((value) => Math.min(9, value + 1))} aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <form className="order-form" onSubmit={(event) => {
              event.preventDefault();
              setOrderComplete(true);
            }}>
              <label>
                Name
                <input required type="text" placeholder="Alex Morgan" />
              </label>
              <label>
                Email
                <input required type="email" placeholder="alex@example.com" />
              </label>
              <label>
                Delivery address
                <textarea required rows="3" placeholder="123 Market Street, Seattle, WA" />
              </label>
              <div className="total-row">
                <span>Total</span>
                <strong>{currency.format(total)}</strong>
              </div>
              <button className="submit-order" type="submit">
                <ShoppingBag size={18} />
                <span>Place mock order</span>
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
