import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Typography, Slider, Button, Divider } from "antd";

function Filter({ products, onApply, onReset }) {
  const maxPrice = Math.max(...products.map((product) => product.price));
  const [sliderValue, setSliderValue] = useState(maxPrice);
  useEffect(() => {
    setSliderValue();
  }, [maxPrice]);

  const handleApply = () => {
    onApply(sliderValue);
  };
  const handleReset = () => {
    onReset();
    setSliderValue(0);
  };

  return (
    <div className="p-6">
      <Typography.Title level={5}>Search Filter</Typography.Title>
      <Button type="link" onClick={handleReset}>
        Reset All
      </Button>

      <Divider />

      <Typography.Text>Price</Typography.Text>
      <Button type="link" onClick={handleReset}>
        Reset
      </Button>

      {/* استخدم سعر المنتج في `Slider` و `Typography.Text` */}
      <Slider
        value={sliderValue}
        onChange={setSliderValue}
        max={maxPrice} // يمكن تحديد قيمة قصوى بناءً على السعر
      />
      <Typography.Text>Max: {sliderValue} EGP</Typography.Text>
      <Button type="link" onClick={handleApply}>
        Apply
      </Button>
    </div>
  );
}

Filter.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onApply: PropTypes.func,
  onReset: PropTypes.func,
};

export default Filter;
