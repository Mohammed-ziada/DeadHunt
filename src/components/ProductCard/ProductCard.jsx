import { HeartOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { useCart } from "../../app/CartContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Col, Button } from "antd";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Col xs={24} sm={24} md={24} lg={24}>
      <Card
        hoverable
        cover={
          <Link to={`/product/${product.id}`} className="">
            <img
              src={product.imagecover}
              alt={product.name}
              className="w-full h-[250px]  bg-cover rounded-xl p-2"
            />
          </Link>
        }
        actions={[
          <div
            className="flex gap-1 align-middle"
            style={{ padding: "10px" }}
            key={product.id}
          >
            <Button
              type="primary"
              className="bg-[#FF3B3B] hover:bg-red-50 text-white w-full"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
            <Button
              type="primary"
              className="bg-[#942121] hover:bg-[#742121] text-white w-full"
            >
              Swap
            </Button>
          </div>,
        ]}
      >
        <Card.Meta
          title={product.name}
          description={
            <div>
              <div className="text-sm text-gray-500">
                {product.category.name}
              </div>
              <div className="text-2xl font-semibold text-[#FF3B3B]">
                {product.price}.00{" "}
                <span className="text-sm font-normal text-gray-500">EGP</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="bg-[#E6F4FF] text-[#0091FF] px-2 py-1 rounded-md flex items-center gap-1">
                  <ThunderboltOutlined className="text-xs" />
                  <span>Fast Shipping</span>
                </div>
                <span className="text-gray-500">Get it by 11 Sep</span>
              </div>
            </div>
          }
        />
        <HeartOutlined
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: 20,
          }}
        />
      </Card>
    </Col>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagecover: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
