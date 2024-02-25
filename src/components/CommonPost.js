import ProductCard from "@/components/shared/ProductCard";
const CommonPost = () => {
    const products = [
        {
            productId: 1,
            productName: "Lays Salt & Vinegar",
            productImage: "assets/lays-salt-vinegar.png",
            productPrice: 7
        },
        {
            productId: 2,
            productName: "Chese Puck 500gm",
            productImage: "/chese-puck-500",
            productPrice: 17
        },
        {
            productId: 3,
            productName: "BabyJoy Number 2",
            productImage: "/babyjoy2",
            productPrice: 20
        }, {
            productId: 1,
            productName: "Lays Salt & Vinegar",
            productImage: "assets/lays-salt-vinegar.png",
            productPrice: 7
        },
        {
            productId: 2,
            productName: "Chese Puck 500gm",
            productImage: "/chese-puck-500",
            productPrice: 17
        },
        {
            productId: 3,
            productName: "BabyJoy Number 2",
            productImage: "/babyjoy2",
            productPrice: 20
        }
    ]
    return (
        <div className="container mx-auto px-2">
            <h1 className="text-xl font-semibold text-white bg-blue-800 inline-block px-2 mt-10 mb-3 uppercase rounded-sm">Common Product</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {
                    products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CommonPost;