'use client'

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/type"
import { BASE_URL } from "@/lib/config"
import { formatPostedDate } from "@/lib/formatDate"
import WishlistButton from "../Button/WishlistButton/WishlistButton"

const ProductCard = ({
  product,
  userEmail,
}: {
  product: Product
  userEmail: string
}) => {
  return (
    <Link
    href={`/products/${product.slug}`}
    className="w-full max-w-[300px] h-[300px] border rounded-[3px] bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      
      {/* Image with Wishlist Button & Featured Badge */}
<div className="grid w-full h-[170px]">
  {/* Product Image */}
  <div
    className="col-start-1 row-start-1"
  >
    <Image
      src={product.featured_image ? `${BASE_URL}${product.featured_image}` : "/placeholder.jpg"}
      alt={product.name}
      width={300}
      height={160}
      className="w-full h-[170px] object-cover"
    />
  </div>

  {/* Wishlist Button (Top-right) */}
  <div className="col-start-1 row-start-1 flex justify-end items-start p-2">
    <WishlistButton 
      productId={product.id}
      userEmail={userEmail}
      isWishlisted={product.is_wishlisted}
    />
  </div>

  {/* Featured Badge (Bottom-left) */}
  {product.featured && (
    <div className="col-start-1 row-start-1 flex items-end justify-start p-2">
      <div className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
        FEATURED
      </div>
    </div>
  )}
</div>


      {/* Product Info */}
      <div className="px-4 pt-3 text-sm text-gray-700 space-y-1">
        <p className="text-lg font-bold text-black">
          ₹ {Number(product.price).toLocaleString()}
        </p>
        <p className="font-medium truncate">{product.name}</p>
        <p className="text-gray-600 truncate">{product.details}</p>

        <div className="flex justify-between items-center text-xs text-gray-500 pt-2">
          <p>{product.posted_in}</p>
          <p>{formatPostedDate(product.posted_date)}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
