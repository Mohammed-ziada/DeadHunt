import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Card,
  Rate,
  Typography,
  Divider,
  Badge,
  Tag,
  Space,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../app/CartContext";

const { Title, Text } = Typography;

const ProductPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };
  const { id } = useParams(); // Fetch product ID from URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-api-v1-cdk5.onrender.com/api/v1/products/${id}`
        );
        const result = await response.json();
        setProduct(result.data); // Assuming product data is in `data`
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Product Header */}
      <Row gutter={[16, 16]}>
        {/* Image Section */}
        <Col span={12}>
          <img
            src={product.imagecover} // From API: main product image
            alt={product.name}
            className="w-full rounded-lg"
          />
          <Row gutter={[8, 8]} className="mt-4">
            {product.image.map((img, idx) => (
              <Col span={4} key={idx}>
                <img
                  src={img} // From API: additional images
                  alt={`Thumbnail ${idx}`}
                  className="w-full rounded-lg cursor-pointer"
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Product Details Section */}
        <Col span={12}>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Badge.Ribbon
              text={product.quantity > 0 ? "In Stock" : "Out of Stock"}
              color={product.quantity > 0 ? "green" : "red"}
            >
              <Title level={4}>{product.name}</Title>
            </Badge.Ribbon>
            <Text strong>Brand: {product.category?.name || "N/A"}</Text>
            <Title level={3} style={{ color: "#e53935" }}>
              EGP {product.priceAfterDiscount.toLocaleString()}{" "}
              <small style={{ fontSize: "0.8em" }}>Including VAT</small>
            </Title>
            <Rate
              allowHalf
              disabled
              defaultValue={product.ratingsQuantity || 0}
            />
            <Text type="secondary">Fast Shipping · Get it by 11 Sep</Text>
            <Divider />
            <div>
              {console.log(product.color)}
              <Title level={5}>Color</Title>
              {product.color.map((color, idx) => (
                <Tag key={idx}>{color}</Tag>
              ))}
            </div>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size="large"
              disabled={product.quantity === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Space>
        </Col>
      </Row>

      {/* Overview Section */}
      <Divider />
      <Title level={4}>Overview</Title>
      <Text>{product.description}</Text>

      {/* Ratings & Reviews Section */}
      <Divider />
      <Title level={4}>Ratings & Reviews</Title>
      <Row gutter={[16, 16]} className="mt-4">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, idx) => (
            <Col span={24} key={idx}>
              <Card>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <div className="flex justify-between items-center">
                    <Text strong>{review.reviewerName || "Anonymous"}</Text>
                    <Rate disabled defaultValue={review.rating || 0} />
                  </div>
                  <Text>{review.comment}</Text>
                  <Text type="secondary" style={{ fontSize: "0.8em" }}>
                    {new Date(review.date).toLocaleDateString()}
                  </Text>
                </Space>
              </Card>
            </Col>
          ))
        ) : (
          <Text>No reviews available for this product.</Text>
        )}
      </Row>

      {/* Frequently Bought Section */}
      <Divider />
      <Title level={4}>Frequently Bought With</Title>
      <Row gutter={[16, 16]}>
        {product.frequentlyBought && product.frequentlyBought.length > 0 ? (
          product.frequentlyBought.map((item, idx) => (
            <Col span={6} key={idx}>
              <Card
                cover={<img src={item.image} alt={item.name} />}
                actions={[<Button>Add to Cart</Button>]}
              >
                <Card.Meta
                  title={item.name}
                  description={`EGP ${item.price.toLocaleString()}`}
                />
              </Card>
            </Col>
          ))
        ) : (
          <Text>No frequently bought products available.</Text>
        )}
      </Row>
    </div>
  );
};

export default ProductPage;
