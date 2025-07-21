import Image from 'next/image';
import { Product } from '@/lib/type';
import { BASE_URL } from '@/lib/config';
import { formatPostedDate } from '@/lib/formatDate';
import Link from 'next/link';



const WishlistProductCard = ({ product }: { product: Product }) => {

return (
    <Link href={`/products/${product.slug}`}>
        <div className="border-b pb-4 flex gap-4 items-start ">
            {/* Image */}
            <Image
                src={product.featured_image}
                alt={product.name}
                width={120}
                height={80}
                className=" object-cover"
            />

            {/* Details */}
            <div className="flex-1 py-6 ">
                <div className="">
                    {product.featured && <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded">FEATURED</span>}
                <h3 className="font-semibold text-xl my-2">₹ {product.price.toLocaleString()}</h3>
                <h2 className="font-semibold text-lg ">{product.name}</h2>
                </div>
                <p className="text-sm text-gray-500 flex items-center">
                {product.posted_in}
                </p>
            </div>
            <div className='flex justify-end items-end h-34 px-4'>
                <p className="text-md text-gray-900 font-semibold">{formatPostedDate(product.posted_date)}</p>
            </div>
        </div>
    </Link>
    );
};

export default WishlistProductCard;
