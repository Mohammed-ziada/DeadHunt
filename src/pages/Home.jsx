import { Layout, Row, Col } from "antd";
import MainSlider from "../components/MainSlider/MainSlider";
import ProductCard from "../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const { Content } = Layout;

export default function Home() {
  const [data, setData] = useState([]);
  const api = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Content>
        <div style={{ margin: 0, padding: 0 }}>
          <MainSlider />
        </div>
        <div style={{ padding: "16px" }}>
          <Row gutter={[16, 16]} justify="space-cneter">
            {data.length > 0
              ? data.map((product) => {
                  return (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                      <ProductCard product={product} />
                    </Col>
                  );
                })
              : "Loading ...."}
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
