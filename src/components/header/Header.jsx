import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import Navbar from "./Navbar";
import "./Header.css";

function Header(props) {
  const { categories, cartCount } = props;

  return (
    <header className="header">
      <div className="header-main">
        <div className="header-left">
          <FiMenu className="menu-icon" />
          <Link to="/" className="logo">
            UNITED DEALS
          </Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search essential, products and select..."
          />
          <div className="search-icon-box">
            <FiSearch />
          </div>
        </div>

        <div className="user-actions">
          <div className="action-item">
            <span className="orange-icon">🛒</span> My Deals
          </div>
          <div className="action-divider">|</div>
          <div className="action-item">
            <FiUser /> Sign Up / Log In
          </div>
          <div className="action-divider">|</div>
          <Link to="/cart" className="action-item cart-link">
            <FiShoppingCart /> Cart{" "}
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      <Navbar categories={categories} />
    </header>
  );
}

export default Header;
