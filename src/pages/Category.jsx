import { useEffect, useState } from "react";
import ProductCart from "../components/ProductCard/ProductCart";
import Filter from "../components/shared/Filter";

export default function Category() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const api = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setData(result.products);
        setFilteredData(result.products); // تعيين المنتجات المبدئية كمنتجات مفلترة
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  const handleApply = (maxPrice) => {
    // تصفية المنتجات بناءً على السعر المحدد
    const newFilteredData = data.filter((product) => product.price <= maxPrice);
    setFilteredData(newFilteredData);
    console.log(newFilteredData);
  };

  const handleReset = () => {
    setFilteredData(data);
  };

  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="bg-slate-100 col-span-3">
          <Filter products={data} onApply={handleApply} onReset={handleReset} />
        </div>
        <div className=" col-span-9 flex flex-wrap gap-3 justify-between p-6">
          {filteredData.length > 0
            ? filteredData.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))
            : "Loading ...."}
        </div>
      </div>
    </>
  );
}
