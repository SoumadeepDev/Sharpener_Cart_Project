import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>React Meals</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <p>Your Cart</p>
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
