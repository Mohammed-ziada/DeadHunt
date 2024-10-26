import { Box, Container, Flex, Section } from "@radix-ui/themes";
import MainSlider from "../components/MainSlider/MainSlider";
import ProductCart from "../components/ProductCard/ProductCart";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const api = "https://dummyjson.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        // console.log({ result });
        setData(result.products);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Section className=" m-0 p-0">
        <MainSlider />
      </Section>
      <Container size="4" className="py-2 ">
        <Flex gap="3" wrap="wrap" justify="between">
          {data.length > 0
            ? data.map((product) => {
                console.log(product);

                return (
                  <Box flex="1" key={product.id}>
                    <ProductCart product={product} />
                  </Box>
                );
              })
            : "Loading ...."}
          {/* <Box flex="1">
                        <ProductCart />
                    </Box>
                    <Box flex="1">
                        <ProductCart />
                    </Box>
                    <Box flex="1">
                        <ProductCart />
                    </Box> */}
        </Flex>
      </Container>
    </>
  );
}
