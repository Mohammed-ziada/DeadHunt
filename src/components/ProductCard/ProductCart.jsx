import product from '../../assets/images/Product.jpg'

export default function ProductCart() {
    return (
        <>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="relative">
                    <div className="bg-pink-100 p-4">
                        <img
                            src={product}
                            alt="Nike Air Force 1 Shadow sneakers"
                            className="w-full h-60 object-cover"
                        />
                    </div>
                    <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md">
                        {/* //  <Heart className="w-5 h-5 text-gray-600" /> */}
                    </button>
                </div>
                <div className="px-4 py-4">
                    <div className="text-sm text-gray-500 mb-2">Fashion & Beauty</div>
                    <h2 className="font-bold text-xl mb-2 text-gray-800">Nike Air Force 1 Shadow sneakers</h2>
                    <p className="text-3xl font-bold text-pink-500 mb-4">
                        620.00 <span className="text-sm font-normal">EGP</span>
                    </p>
                    <div className="flex items-center text-sm text-blue-600">
                        {/* <Zap className="w-4 h-4 mr-1" /> */}
                        <span className="font-medium">Fast Shipping</span>
                        <span className="ml-1 text-gray-500">Get it by 11 sep</span>
                    </div>
                </div>
            </div>



        </>
    )
}
