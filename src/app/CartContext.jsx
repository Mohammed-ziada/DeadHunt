// context/CartContext.js
import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { message } from "antd";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch cart from API
  const fetchCart = useCallback(async () => {
    try {
      const response = await fetch(
        "https://e-commerce-api-v1-cdk5.onrender.com/api/v1/cart",
        {
          credentials: "include", // Ensures cookies/session are sent
        }
      );
      const result = await response.json();
      if (response.ok) {
        setCart(result.data);
      } else {
        message.error(result.message || "Failed to fetch cart");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Add product to cart
  const addToCart = useCallback(
    async (product) => {
      try {
        const response = await fetch(
          "https://e-commerce-api-v1-cdk5.onrender.com/api/v1/cart",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ productId: product.id, quantity: 1 }),
          }
        );
        const result = await response.json();
        if (response.ok) {
          fetchCart(); // Refresh cart
          message.success("Product added to cart");
        } else {
          message.error(result.message || "Failed to add product to cart");
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    [fetchCart]
  );

  // Remove product from cart
  const removeFromCart = useCallback(async (id) => {
    try {
      const response = await fetch(
        `https://e-commerce-api-v1-cdk5.onrender.com/api/v1/cart/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        message.success("Product removed from cart");
      } else {
        message.error("Failed to remove product from cart");
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  }, []);

  // Update product quantity in cart
  const updateQuantity = useCallback(
    async (id, quantity) => {
      try {
        const response = await fetch(
          `https://e-commerce-api-v1-cdk5.onrender.com/api/v1/cart/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ quantity }),
          }
        );
        const result = await response.json();
        if (response.ok) {
          fetchCart();
          message.success("Product quantity updated");
        } else {
          message.error(result.message || "Failed to update quantity");
        }
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    },
    [fetchCart]
  );
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <CartContext.Provider
      value={{ cart, isLoading, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
