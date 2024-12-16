// import { HeartOutlined } from "@ant-design/icons";
// import { ThunderboltOutlined } from "@ant-design/icons";
// import propTypes from "prop-types";

// export default function ProductCard({ product }) {
//   const { title, price, thumbnail, category } = product;

//   return (
//     <div className="bg-white/80 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-4 max-w-[300px] relative group">
//       {/* Image Container with pink background */}
//       <div className="relative rounded-xl overflow-hidden mb-4 ">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="w-full h-[250px] object-contain rounded-xl p-2"
//         />
//         <button className="absolute bottom-3 right-3 p-2 bg-black/5 rounded-lg">
//           <HeartOutlined className="text-black text-sm" />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="space-y-2">
//         <div className="text-sm text-gray-500">{category}</div>
//         <h2 className="font-medium text-lg text-gray-900">{title}</h2>
        
//         <div className="flex flex-col gap-2">
//           <p className="text-2xl font-semibold text-[#FF3B3B]">
//             {price}.00 <span className="text-sm font-normal text-gray-500">EGP</span>
//           </p>

//           {/* Fast Shipping Tag */}
//           <div className="flex items-center gap-1 text-xs">
//             <div className="bg-[#E6F4FF] text-[#0091FF] px-2 py-1 rounded-md flex items-center gap-1">
//               <ThunderboltOutlined className="text-xs" />
//               <span>Fast Shipping</span>
//             </div>
//             <span className="text-gray-500">Get it by 11 sep</span>
//           </div>
//         </div>
//         <div>
//           <button className="bg-[#FF3B3B] text-white py-2 rounded-md w-full">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ProductCard.propTypes = {
//   product: propTypes.object.isRequired,
// };
// components/ProductCard/ProductCard.js

// import { Button } from 'antd';
import { HeartOutlined, ThunderboltOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import { useCart } from '../../app/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white/80 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-4 max-w-[300px] relative group">
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[250px] object-contain rounded-xl p-2"
        />
        <button className="absolute bottom-3 right-3 p-2 bg-black/5 rounded-lg">
          <HeartOutlined className="text-black text-sm" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-gray-500">{product.category}</div>
        <h2 className="font-medium text-lg text-gray-900">{product.title}</h2>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold text-[#FF3B3B]">
            {product.price}.00 <span className="text-sm font-normal text-gray-500">EGP</span>
          </p>

          <div className="flex items-center gap-1 text-xs">
            <div className="bg-[#E6F4FF] text-[#0091FF] px-2 py-1 rounded-md flex items-center gap-1">
              <ThunderboltOutlined className="text-xs" />
              <span>Fast Shipping</span>
            </div>
            <span className="text-gray-500">Get it by 11 sep</span>
          </div>
        </div>

        <div>
          <button
            className="bg-[#FF3B3B] text-white py-2 rounded-md w-full"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <Link to={`/product`}>
          go to 
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: propTypes.object.isRequired,
};
