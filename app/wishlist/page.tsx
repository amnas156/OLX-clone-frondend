import { auth } from '@/auth'
import CategoryProductCard from '@/components/category/CategoryProductCard'
import FirstLogin from '@/components/home/FirstLogin'
import Header from '@/components/navbar/Header'
import WishlistProductCard from '@/components/Wishlist/WishlistProductCard'
import { getWishlistItems } from '@/lib/api'
import { Product } from '@/lib/type'

import React from 'react'

const WishlistPage = async () => {

    const session = await auth()
    const loggedInUser = session?.user?.email

    const wishlist = await getWishlistItems(loggedInUser!)

    if (!loggedInUser) {
    return <FirstLogin feature='post your ad or access this feature'/>;
  }
    
    return (
        <div>
            <Header/>
            {wishlist.map((product: Product) => (
            <WishlistProductCard product={product} key={product.id}/>
        ))}
        </div>
    )
}

export default WishlistPage
