import images from "@/assets/lays-salt-vinegar.png";
import Image from 'next/image';
const ProductCard = ({ product }) => {
    const { productName, productImage, productPrice } = product;
    return (
        <article className="card bg-base-100 shadow-2xl">
            <figure className="p-2">
                <Image src={images} alt={productName} width={500} height={500} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center px-2 py-3">
                <h2 className="text-sm uppercase font-semibold">{productName}</h2>
                <div className="flex items-center gap-2">
                    <p className='text-base uppercase font-semibold'>{productPrice} SAR </p>
                    <div className='flex justify-center items-center border px-1'>
                        <button className='text-red-600 text-xl'>-</button>
                        <input min={1} max={10} maxLength={3} name="quantity" defaultValue="1" type="number" className="w-10 text-center input-none" />
                        <button className='text-green-600 text-xl'>+</button>
                    </div>
                </div>

                <div className="card-actions">
                    <button className="btn btn-secondary btn-sm">Add to Cart</button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;