import { Layout, Row, Col } from "antd";
import MainSlider from "../components/MainSlider/MainSlider";
import ProductCard from "../components/ProductCard/ProductCard";
import CategorySlider from "../components/CategorySlider/CategorySlider";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

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
  // console.log(data[0].category);
  return (
    <Layout>
      <Helmet>
        <title>DealHunt - Home</title>
    </Helmet>
      <Content className="">
        <div style={{ margin: 0, padding: 0 }}>
          <MainSlider />
        </div>
        <CategorySlider Products={data} />
        <div className="mt-4">
          <Row gutter={[16, 24]} justify="start">
            {data.length > 0
              ? data.map((product) => {
                  return (
                    <Col 
                      key={product.id} 
                      xs={24} 
                      sm={12} 
                      md={8} 
                      lg={6} 
                      className="flex justify-center"
                    >
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
