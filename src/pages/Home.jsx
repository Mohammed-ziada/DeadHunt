import { Box, Container, Flex, Section } from "@radix-ui/themes";
import MainSlider from "../components/MainSlider/MainSlider";
import ProductCart from "../components/ProductCard/ProductCart";

export default function Home() {
    return (
        <>
            <Section className=" m-0 p-0">
                <MainSlider />
            </Section>
            <Container size="4" className="py-2 ">
                <Flex gap="3" wrap="nowrap">
                    <Box flex="1">
                        <ProductCart />
                    </Box>
                    <Box flex="1">
                        <ProductCart />
                    </Box>
                    <Box flex="1">
                        <ProductCart />
                    </Box>
                    <Box flex="1">
                        <ProductCart />
                    </Box>
                </Flex>
            </Container>
        </>
    );
}
