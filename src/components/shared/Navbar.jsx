import { useState } from 'react';
import logo from '../../assets/images/Logo.svg';
import SearchBox from './SearchBox';
import { Button, Col, Menu, Row, Modal, Drawer } from 'antd';
import { MenuOutlined, MoonOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Registration from './../../pages/Regestraion';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const items = [
    { label: 'All Categories', key: 'categories' },
    { label: 'Electronics', key: 'electronics' },
    { label: 'Vehicles', key: 'vehicles' },
    { label: 'Fashion & Beauty', key: 'fashion' },
    { label: 'Hobbies', key: 'hobbies' },
    { label: 'Jobs', key: 'jobs' },
    { label: 'Properties', key: 'properties' },
    { label: 'Furniture', key: 'furniture' },
    { label: 'Deals', key: 'deals' },
    { label: 'Marketplace', key: 'marketplace' },
  ];

  const [current, setCurrent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className="bg-white shadow-sm">
      <Row align="middle" justify="space-between" className="py-2 px-4 sm:px-6">

        {/* Left - Logo */}
        <Col xs={6} sm={4} md={3} className="flex items-center">
          <img src={logo} alt="Logo" className="h-5" />
        </Col>

        {/* Center - Menu Items */}
        <Col xs={0} sm={16} md={14} className="hidden sm:flex justify-center">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items.map(item => ({
              ...item,
              label: <span className="text-sm text-subMain">{item.label}</span>,
            }))}
            className="border-none w-full justify-center"
          />
        </Col>

        {/* Right - Icons and Login */}
        <Col xs={6} sm={4} md={3} className="flex items-center justify-end space-x-4">
          <MoonOutlined className="text-gray-500 text-lg hidden sm:block" />

          <Link to='cart'>
            <ShoppingCartOutlined className="text-gray-500 text-lg hidden sm:block hover:text-black duration-300" />
          </Link>

          <Button
            type="link"
            className="text-red-600 text-sm hidden sm:block"
            onClick={showModal}
          >
            Log in
          </Button>

          {/* Mobile Menu Icon */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="block sm:hidden text-lg"
            onClick={showDrawer}
          />
        </Col>
      </Row>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={250}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items.map(item => ({
            ...item,
            label: <span className="text-sm">{item.label}</span>,
          }))}
        />
        <div className="mt-4 flex justify-between items-center">
          <MoonOutlined className="text-gray-500 text-lg" />

          <Link to='cart'>
            <ShoppingCartOutlined className="text-gray-500 text-lg   sm:block" />
          </Link>



          <Button type="link" className="text-red-600 text-sm" onClick={showModal}>
            Log in
          </Button>
        </div>
      </Drawer>

      {/* Login Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered

      >
        <Registration />
      </Modal>

      {/* Search Box below Navbar */}
      <SearchBox />
    </div>
  );
}
