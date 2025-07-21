'use client';

import { ProductDetail } from '@/lib/type';
import ChatButton from "../Button/ChatButton/ChatButton";
import Gallery from "./Gallery";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { formatPostedDate } from "@/lib/formatDate";
import WishlistButton from '../Button/WishlistButton/WishlistButton';
import Image from 'next/image';


const ProductInfo = ({ product, userToken }: { product: ProductDetail, userToken: string | undefined }) => {
  const owner = product.owner;
  

  const allImages = [
    ...(product.featured_image ? [{ id: -1, image: product.featured_image }] : []),
    ...product.images,
  ];

  return (
    <div className="w-full">
      {/* Image Gallery */}
        <Gallery images={allImages} />
      {/* Product Name & Price */}
      <div className="px-10 space-y-6 py-6 border-y-2 my-4" >
        <div className='flex justify-between items-center'>
          <div className='space-y-4'>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">₹{product.price}</p>
          </div>
          <div>
            <WishlistButton productId={product.id}
            userEmail={userToken!}
            isWishlisted={product.is_wishlisted}/>
          </div>
        </div>
      </div>

      {/* Posting Date & Location */}
      <div className="px-10 space-y-6 py-6  flex justify-between">
        <div>
          <div className="flex gap-2 items-center my-2 text-gray-500">
            <CiCalendarDate />
            <span>Posting date</span>
          </div>
          <p className="text-sm text-gray-500">{formatPostedDate(product.posted_date)}</p>
        </div>
        <div>
          <div className="flex gap-2 items-center my-2 text-gray-500">
            <CiLocationOn />
            <span>Location</span>
          </div>
          <p className="text-sm text-gray-500">{product.posted_in}</p>
        </div>
      </div>

      {/* Description */}
      <div className="px-10 space-y-4 py-6 border-y-2">
        <span className="text-lg font-semibold">Description</span>
        <p>{product.description}</p>
      </div>

    {/* owe */}
      <div className="px-10  py-6 ">
        <div className='flex gap-6'>
          <Image 
            src={ product.owner_picture? `${product.owner_picture}` : '/image/user.png'} 
            alt={owner.username} 
            width={64} 
            height={64} 
            className="rounded-full object-cover border"
          />
          <p className='text-md my-auto '>Posted by <span className='text-xl my-auto font-bold'>{owner.username}</span></p>
        </div>
      </div>

    {userToken === product.owner.email ? (
  <div>
  </div>
) : (
  <div className="w-64 mx-auto my-8 sticky bottom-8">
    <ChatButton productId={product.id} userToken={userToken!} />
  </div>
)}

    </div>
  );
};

export default ProductInfo;
