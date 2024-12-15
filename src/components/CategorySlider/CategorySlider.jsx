/* eslint-disable react/prop-types */
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import beauty from '../../assets/images/img=1.png'
import fragrances from '../../assets/images/img=3.png'
import groceries from '../../assets/images/img=4.png'
import furniture from '../../assets/images/img=img9.png'



export default function CategorySlider({Products}) {
  const sliderRef = useRef(null);
  
  const categ = Array.from(
    new Set(Products.map((product) => product.category))
  );
  const categoryImages = {
    beauty: beauty,
    fragrances: fragrances,
    furniture: furniture,
    groceries: groceries,
  };
  const categWithImages = categ.map((category) => ({
    name: category,
    image: categoryImages[category], // Use a default image if no match is found
  }));
  console.log(categ);
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative  py-6">
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-black text-lg font-medium">Shop by category</h3>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg transition-colors"
            >
              <LeftOutlined />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-lg transition-colors"
            >
              <RightOutlined />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth pb-4 justify-between "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categWithImages.map((categ) => (
            <div
              key={categ.name}
              className="flex-shrink-0 cursor-pointer group row"
            >
              <div className=" bg-[#2A2A2A] h-[200px] w-[200px] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={categ.image}
                  alt={categ.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <h4 className="absolute bottom-3 left-3 text-white text-lg font-medium z-20">
                  {categ.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
CategorySlider.prototype = {
  Products: PropTypes.array,
}