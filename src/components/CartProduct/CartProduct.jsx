// import { Button, Col, Image, Row, Tag, Typography } from 'antd';
// import product from '../../assets/images/Product.jpg';
// import { DeleteOutlined, ThunderboltOutlined } from '@ant-design/icons';

// export default function CartProduct() {
//     const { Title, Text } = Typography;

//     return (
//         <div className="p-4 m-4 border rounded-lg relative">
//             <Row 
//                 gutter={[16, 16]} 
//                 align="middle" 
//                 className="flex-wrap"
//             >
//                 {/* Image Section */}
//                 <Col 
//                     xs={24} sm={8} md={6} lg={4} 
//                     className="relative flex justify-center"
//                 >
//                     <Image
//                         width={120}
//                         src={product}
//                         alt="iPhone 15 Pro Max"
//                         className="rounded-lg"
//                     />
//                     {/* Floating Delete Button */}
//                     <Button
//                         className="absolute bottom-2 right-2 bg-black opacity-70 text-white hover:opacity-90"
//                         icon={<DeleteOutlined />}
//                         onClick={() => console.log('Delete item')}
//                     />
//                 </Col>

//                 {/* Info Section */}
//                 <Col xs={24} sm={16} md={18} lg={20}>
//                     <Title 
//                         level={3} 
//                         className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
//                     >
//                         iPhone 15 Pro Max 512GB Natural Titanium 5G
//                     </Title>
//                     <Text 
//                         type="secondary" 
//                         className="block text-sm sm:text-base"
//                     >
//                         Blue Titanium | 512GB | Middle Eastern Version
//                     </Text>

//                     <div className="flex flex-wrap items-center mt-2 space-x-2">
//                         <Tag color="#2db7f5">
//                             <ThunderboltOutlined /> Fast Shipping
//                         </Tag>
//                         <Text className="text-black text-sm sm:text-base">
//                             Get it by 11 Sep
//                         </Text>
//                     </div>

//                     {/* Quantity and Price Controls */}
//                     <Row gutter={[16, 16]} className="py-2 items-center">
//                         {/* Quantity Controls */}
//                         <Col xs={12} sm={8} md={6} className="flex">
//                             <Button className="px-3 py-1 text-lg font-bold" type="text">-</Button>
//                             <span className="px-4 text-lg">1</span>
//                             <Button className="px-3 py-1 text-lg font-bold" type="text">+</Button>
//                         </Col>

//                         {/* Price Section */}
//                         <Col xs={12} sm={16} md={18} className="text-right">
//                             <Text className="text-main text-xl font-bold">
//                                 <Text className="p-2" type="secondary">EGP</Text>620.00
//                             </Text>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//         </div>
//     );
// }
// components/CartProduct/CartProduct.js
import { Button, Col, Image, Row, Tag, Typography } from 'antd';
import { DeleteOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useCart } from '../../app/CartContext';


export default function CartProduct({ product }) {
  const { removeFromCart, updateQuantity } = useCart();
  const { id, title, price, quantity, thumbnail, category } = product;

  return (
    <div className="p-4 m-4 border rounded-lg relative">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={8} md={6} lg={4} className="relative flex justify-center">
          <Image
            width={120}
            src={thumbnail}
            alt={title}
            className="rounded-lg"
          />
          <Button
            className="absolute bottom-2 right-2 bg-black opacity-70 text-white hover:opacity-90"
            icon={<DeleteOutlined />}
            onClick={() => removeFromCart(id)}
          />
        </Col>

        <Col xs={24} sm={16} md={18} lg={20}>
          <Typography.Title level={3}>{title}</Typography.Title>
          <Typography.Text type="secondary">{category}</Typography.Text>

          <div className="flex flex-wrap items-center mt-2">
            <Tag color="#2db7f5">
              <ThunderboltOutlined /> Fast Shipping
            </Tag>
            <Typography.Text className="text-black">Get it by 11 Sep</Typography.Text>
          </div>

          <Row gutter={[16, 16]} className="py-2 items-center">
            <Col xs={12} sm={8} md={6} className="flex items-center">
              <Button
                className="px-3 py-1 text-lg font-bold"
                type="text"
                onClick={() => updateQuantity(id, quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="px-4 text-lg">{quantity}</span>
              <Button
                className="px-3 py-1 text-lg font-bold"
                type="text"
                onClick={() => updateQuantity(id, quantity + 1)}
              >
                +
              </Button>
            </Col>

            <Col xs={12} sm={16} md={18} className="text-right">
              <Typography.Text className="text-main text-xl font-bold">
                <span className="p-2" type="secondary">EGP</span>
                {price * quantity}.00
              </Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

