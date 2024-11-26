 
import { Button, Radio, Tag } from "antd";

const ProductPage = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <div className="flex gap-6">
                {/* Image Section */}
                <div className="w-1/3">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Product"
                        className="rounded-lg shadow-lg"
                    />
                    <div className="flex gap-2 mt-4">
                        <img
                            src="https://via.placeholder.com/60"
                            alt="Thumbnail"
                            className="rounded-lg border border-gray-300"
                        />
                        <img
                            src="https://via.placeholder.com/60"
                            alt="Thumbnail"
                            className="rounded-lg border border-gray-300"
                        />
                        <img
                            src="https://via.placeholder.com/60"
                            alt="Thumbnail"
                            className="rounded-lg border border-gray-300"
                        />
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="w-2/3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">iPhone 15 Pro Max</h1>
                        <Tag color="red">Only 1 left in stock</Tag>
                    </div>
                    <p className="text-gray-500">Natural Titanium 5G - Middle East Version</p>

                    <div className="mt-4">
                        <p className="text-xl font-semibold text-red-600">EGP 72,899.00</p>
                        <p className="text-sm text-gray-400">Including VAT</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-semibold">Color:</p>
                        <Radio.Group className="flex gap-4">
                            <Radio.Button value="1">Natural Titanium</Radio.Button>
                            <Radio.Button value="2">Blue Titanium</Radio.Button>
                            <Radio.Button value="3">White Titanium</Radio.Button>
                        </Radio.Group>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm font-semibold">Internal Storage:</p>
                        <Radio.Group className="flex gap-4">
                            <Radio.Button value="512GB">512GB</Radio.Button>
                            <Radio.Button value="1TB">1TB</Radio.Button>
                        </Radio.Group>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm font-semibold">Version:</p>
                        <Radio.Group className="flex gap-4">
                            <Radio.Button value="Middle East">Middle East</Radio.Button>
                            <Radio.Button value="US">US</Radio.Button>
                        </Radio.Group>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <Button type="primary" className="bg-pink-500 hover:bg-pink-600">
                            Add to Cart
                        </Button>
                        <Tag color="green">Fast Shipping</Tag>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
