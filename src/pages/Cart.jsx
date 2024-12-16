// import {
//   Typography,
//   Col,
//   Row,
//   Breadcrumb,
//   Input,
//   Button,
//   Divider,
// } from 'antd';
// import CartProduct from '../components/CartProduct/CartProduct';
// import { Link } from 'react-router-dom';

// export default function Cart() {
//   const { Title, Text } = Typography;

  // return (
  //   <Row className="p-4">
  //     {/* Breadcrumb Section */}
  //     <Col span={24}>
  //       <Breadcrumb className="m-3 p-3" separator=">">
  //         <Breadcrumb.Item href="/">
  //           <span>Home</span>
  //         </Breadcrumb.Item>
  //         <Breadcrumb.Item href="/news">
  //           <span>News</span>
  //         </Breadcrumb.Item>
  //       </Breadcrumb>
  //     </Col>

  //     {/* Main Content: Cart Items + Order Summary */}
  //     <Col span={24}>
  //       <Row gutter={[16, 16]}>
  //         {/* Cart Items Section */}
  //         <Col xs={24} md={18} className="p-4">
  //           <Title level={4}>
  //             Cart <Text className="text-lg" type="secondary">(3 items)</Text>
  //           </Title>
  //           <Row gutter={[16, 16]}>
  //             <Col span={24}>
  //               <CartProduct />
  //               <CartProduct />
  //               <CartProduct />
  //             </Col>
  //           </Row>
  //         </Col>

  //         {/* Order Summary Section */}
  //         <Col
  //           xs={24}
  //           md={6}
  //           className="p-4 border border-gray-200 rounded-md bg-white self-start"
  //         >
  //           <Row gutter={[16, 16]}>
  //             <Col span={24}>
  //               <Title level={4}>Order Summary</Title>
  //             </Col>

  //             {/* Coupon Input */}
  //             <Col span={24}>
  //               <Input
  //                 placeholder="Coupon Code"
  //                 suffix={
  //                   <Button
  //                     className="bg-main hover:bg-slate-900 text-white font-semibold px-3 rounded-md transition-colors duration-300 !important"
  //                   >
  //                     Apply
  //                   </Button>
  //                 }
  //                 className="rounded-md"
  //               />
  //             </Col>

  //             {/* Summary Items */}
  //             <Col span={24} className="my-4">
  //               <Row className="p-3">
  //                 {/* Subtotal Section */}
  //                 <Col span={24} className="my-2">
  //                   <Row align="middle" gutter={[8, 8]}>
  //                     <Col xs={12} sm={8}>
  //                       <Text type="secondary" className="text-base sm:text-lg">
  //                         Subtotal
  //                       </Text>
  //                     </Col>
  //                     <Col xs={12} sm={8} offset={4} className="text-right">
  //                       <Text type="secondary" className="text-base sm:text-lg">
  //                         EGP <span className="text-gray-500 font-medium">128</span>
  //                       </Text>
  //                     </Col>
  //                   </Row>
  //                 </Col>

  //                 {/* Shipping Section */}
  //                 <Col span={24} className="my-2">
  //                   <Row align="middle" gutter={[8, 8]}>
  //                     <Col xs={12} sm={8}>
  //                       <Text type="secondary" className="text-base sm:text-lg">
  //                         Shipping
  //                       </Text>
  //                     </Col>
  //                     <Col xs={12} sm={8} offset={4} className="text-right">
  //                       <Text type="secondary" className="text-base sm:text-lg">
  //                         EGP <span className="text-gray-500 font-medium">32</span>
  //                       </Text>
  //                     </Col>
  //                   </Row>
  //                 </Col>

  //                 <Divider />

  //                 {/* Total Section */}
  //                 <Col span={24}>
  //                   <Row align="middle" gutter={[8, 8]}>
  //                     <Col xs={12}>
  //                       <Title level={4} className="text-base sm:text-xl">
  //                         Total <Text type="secondary">(Including VAT)</Text>
  //                       </Title>
  //                     </Col>
  //                     <Col xs={12} className="text-right">
  //                       <Text className="text-main text-lg sm:text-xl font-bold">
  //                         <Text className="p-2" type="secondary">
  //                           EGP
  //                         </Text>
  //                         620.00
  //                       </Text>
  //                     </Col>

  //                     {/* Checkout Button */}
  //                     <Col span={24} className="mt-4">

  //                       <Link to='/checkOut'

  //                       >
  //                         <Button
  //                           size="large"
  //                           className="w-full  bg-main text-white hover:bg-slate-900 transition-colors duration-300"
  //                         >
  //                           Checkout
  //                         </Button>



  //                       </Link >
  //                     </Col>
  //                   </Row>
  //                 </Col>
  //               </Row>
  //             </Col>
  //           </Row>
  //         </Col>
  //       </Row>
  //     </Col>
  //   </Row>
  // );
// }
// pages/Cart.js

// import { Breadcrumb, Col, Row } from 'antd';
// import { useCart } from '../app/CartContext';
// import CartProduct from '../components/CartProduct/CartProduct';

// export default function Cart() {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   return (

//   <div className="p-4">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         cart.map(product => (
//           <CartProduct
//             key={product.id}
//             product={product}
//             removeProduct={removeFromCart}
//             updateQuantity={updateQuantity}
//           />
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
 


//   );
// }
// import { Breadcrumb, Col, Row, Typography, Input, Button, Divider } from 'antd';
// import { useCart } from '../app/CartContext';
// import CartProduct from '../components/CartProduct/CartProduct';
// import { Link } from 'react-router-dom';

// export default function Cart() {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const { Title, Text } = Typography;

//   return (
//     <Row className="p-4">
//       {/* Breadcrumb Section */}
//       <Col span={24}>
//         <Breadcrumb className="m-3 p-3" separator=">">
//           <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//           <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
//         </Breadcrumb>
//       </Col>

//       {/* Cart Items Section */}
//       <Col xs={24} md={18} className="p-4">
//         <Title level={4}>
//           Cart <Text className="text-lg" type="secondary">({cart.length} items)</Text>
//         </Title>
//         <Row gutter={[16, 16]}>
//           <Col span={24}>
//             {cart.length > 0 ? (
//               cart.map((product) => (
//                 <CartProduct
//                   key={product.id}
//                   product={product}
//                   removeProduct={removeFromCart}
//                   updateQuantity={updateQuantity}
//                 />
//               ))
//             ) : (
//               <p>Your cart is empty.</p>
//             )}
//           </Col>
//         </Row>
//       </Col>

//       {/* Order Summary Section */}
//       <Col xs={24} md={6} className="p-4 border border-gray-200 rounded-md bg-white self-start">
//         <Row gutter={[16, 16]}>
//           <Col span={24}>
//             <Title level={4}>Order Summary</Title>
//           </Col>

//           {/* Coupon Input */}
//           <Col span={24}>
//             <Input
//               placeholder="Coupon Code"
//               suffix={
//                 <Button className="bg-main hover:bg-slate-900 text-white font-semibold px-3 rounded-md transition-colors duration-300">
//                   Apply
//                 </Button>
//               }
//               className="rounded-md"
//             />
//           </Col>

//           {/* Summary Items */}
//           <Col span={24} className="my-4">
//             <Row className="p-3">
//               {/* Subtotal Section */}
//               <Col span={24} className="my-2">
//                 <Row align="middle" gutter={[8, 8]}>
//                   <Col xs={12} sm={8}>
//                     <Text type="secondary" className="text-base sm:text-lg">
//                       Subtotal
//                     </Text>
//                   </Col>
//                   <Col xs={12} sm={8} offset={4} className="text-right">
//                     <Text type="secondary" className="text-base sm:text-lg">
//                       EGP <span className="text-gray-500 font-medium">128</span>
//                     </Text>
//                   </Col>
//                 </Row>
//               </Col>

//               {/* Shipping Section */}
//               <Col span={24} className="my-2">
//                 <Row align="middle" gutter={[8, 8]}>
//                   <Col xs={12} sm={8}>
//                     <Text type="secondary" className="text-base sm:text-lg">
//                       Shipping
//                     </Text>
//                   </Col>
//                   <Col xs={12} sm={8} offset={4} className="text-right">
//                     <Text type="secondary" className="text-base sm:text-lg">
//                       EGP <span className="text-gray-500 font-medium">32</span>
//                     </Text>
//                   </Col>
//                 </Row>
//               </Col>

//               <Divider />

//               {/* Total Section */}
//               <Col span={24}>
//                 <Row align="middle" gutter={[8, 8]}>
//                   <Col xs={12}>
//                     <Title level={4} className="text-base sm:text-xl">
//                       Total <Text type="secondary">(Including VAT)</Text>
//                     </Title>
//                   </Col>
//                   <Col xs={12} className="text-right">
//                     <Text className="text-main text-lg sm:text-xl font-bold">
//                       <Text className="p-2" type="secondary">
//                         EGP
//                       </Text>
//                       620.00
//                     </Text>
//                   </Col>

//                   {/* Checkout Button */}
//                   <Col span={24} className="mt-4">
//                     <Link to="/checkOut">
//                       <Button
//                         size="large"
//                         className="w-full bg-main text-white hover:bg-slate-900 transition-colors duration-300"
//                       >
//                         Checkout
//                       </Button>
//                     </Link>
//                   </Col>
//                 </Row>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Col>
//     </Row>
//   );
// }

import { Breadcrumb, Col, Row, Typography, Input, Button, Divider } from 'antd';
import { useCart } from '../app/CartContext';
import CartProduct from '../components/CartProduct/CartProduct';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { Title, Text } = Typography;

  // Calculate Subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Shipping cost (fixed or calculated based on cart)
  const calculateShipping = () => {
    return cart.length > 0 ? 32 : 0;  // For example, fixed shipping cost of 32 EGP
  };

  // VAT (e.g., 14%)
  const calculateVAT = (subtotal) => {
    return subtotal * 0.14; // Assuming 14% VAT
  };

  // Total = Subtotal + Shipping + VAT
  const subtotal = calculateSubtotal();
  const shipping = calculateShipping();
  const vat = calculateVAT(subtotal);
  const total = subtotal + shipping + vat;
  const { fileName } = useParams();
  console.log(fileName);
  return (
    <Row className="p-4">
    <Helmet>
        <title>DealHunt - Cart</title>
    </Helmet>
      {/* Breadcrumb Section */}
      <Col span={24}>
        <Breadcrumb className="m-3 p-3" separator=">">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
        </Breadcrumb>
      </Col>

      {/* Cart Items Section */}
      <Col xs={24} md={18} className="p-4">
        <Title level={4}>
          Cart <Text className="text-lg" type="secondary">({cart.length} items)</Text>
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  removeProduct={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </Col>
        </Row>
      </Col>

      {/* Order Summary Section */}
      <Col xs={24} md={6} className="p-4 border border-gray-200 rounded-md bg-white self-start">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Title level={4}>Order Summary</Title>
          </Col>

          {/* Coupon Input */}
          <Col span={24}>
            <Input
              placeholder="Coupon Code"
              suffix={
                <Button className="bg-main hover:bg-slate-900 text-white font-semibold px-3 rounded-md transition-colors duration-300">
                  Apply
                </Button>
              }
              className="rounded-md"
            />
          </Col>

          {/* Summary Items */}
          <Col span={24} className="my-4">
            <Row className="p-3">
              {/* Subtotal Section */}
              <Col span={24} className="my-2">
                <Row align="middle" gutter={[8, 8]}>
                  <Col xs={12} sm={8}>
                    <Text type="secondary" className="text-base sm:text-lg">
                      Subtotal
                    </Text>
                  </Col>
                  <Col xs={12} sm={8} offset={4} className="text-right">
                    <Text type="secondary" className="text-base sm:text-lg">
                      EGP <span className="text-gray-500 font-medium">{subtotal.toFixed(2)}</span>
                    </Text>
                  </Col>
                </Row>
              </Col>

              {/* Shipping Section */}
              <Col span={24} className="my-2">
                <Row align="middle" gutter={[8, 8]}>
                  <Col xs={12} sm={8}>
                    <Text type="secondary" className="text-base sm:text-lg">
                      Shipping
                    </Text>
                  </Col>
                  <Col xs={12} sm={8} offset={4} className="text-right">
                    <Text type="secondary" className="text-base sm:text-lg">
                      EGP <span className="text-gray-500 font-medium">{shipping}</span>
                    </Text>
                  </Col>
                </Row>
              </Col>

              <Divider />

              {/* Total Section */}
              <Col span={24}>
                <Row align="middle" gutter={[8, 8]}>
                  <Col xs={12}>
                    <Title level={4} className="text-base sm:text-xl">
                      Total <Text type="secondary">(Including VAT)</Text>
                    </Title>
                  </Col>
                  <Col xs={12} className="text-right">
                    <Text className="text-main text-lg sm:text-xl font-bold">
                      <Text className="p-2" type="secondary">
                        EGP
                      </Text>
                      {total.toFixed(2)}
                    </Text>
                  </Col>

                  {/* Checkout Button */}
                  <Col span={24} className="mt-4">
                    <Link to="/checkOut">
                      <Button
                        size="large"
                        className="w-full bg-main text-white hover:bg-slate-900 transition-colors duration-300"
                      >
                        Checkout
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
