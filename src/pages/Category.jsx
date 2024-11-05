import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/FilterSidebar/Filter";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function Category() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setData(result.products);
        setFilteredData(result.products);
      } catch (error) {
        console.error("Error Fetching Data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleApply = (
    [minPrice = 0, maxPrice = 2999],
    minRating = 0,
    inStock = "In Stock",
    timeRange = "all_time",
    category = "all"
  ) => {
    const currentTime = new Date();

    const newFilteredData = data.filter((product) => {
      const productDate = new Date(product.meta.updatedAt);
      const isWithinTimeRange = (() => {
        console.log(timeRange);
        switch (timeRange) {
          case 7:
            return (currentTime - productDate) / (1000 * 60 * 60 * 24) <= 7;
          case 30:
            return (currentTime - productDate) / (1000 * 60 * 60 * 24) <= 30;
          case 90:
            return (currentTime - productDate) / (1000 * 60 * 60 * 24) <= 90;
          case "all_time":
          default:
            return true;
        }
      })();

      return (
        (minPrice === 0 || product.price >= minPrice) &&
        (maxPrice === 0 || product.price <= maxPrice) &&
        (minRating === 0 || product.rating >= minRating) &&
        (inStock === "" || inStock === "In Stock"
          ? product.availabilityStatus === inStock
          : true) &&
        (category === "all" || product.category === category) &&
        isWithinTimeRange
      );
    });

    setFilteredData(newFilteredData);
    console.log(newFilteredData);
  };

  const handleReset = () => {
    setFilteredData(data);
  };

  return (
    <>
      <div className="grid grid-cols-12 p-6">
        <div className=" col-span-3 ">
          <div className=" w-5/6 shadow rounded-lg m-auto">
            <Filter
              products={data}
              onApply={handleApply}
              onReset={handleReset}
            />
          </div>
        </div>
        <div className="col-span-9 flex flex-wrap gap-3 justify-center p-6">
          <div className="div grid grid-cols-12 gap-3">
            {isLoading ? (
              <p>Loading ...</p>
            ) : filteredData.length > 0 ? (
              filteredData.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <div className="flex flex-col items-center w-full gap-2">
                <ExclamationCircleOutlined
                  style={{ fontSize: "90px", color: "#ddd" }}
                  className="mb-2"
                />
                <p className="font-bold">No Products Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
