import { auth } from '@/auth'
import Ads from '@/components/ads/Ads'
import FirstLogin from '@/components/home/FirstLogin'
import Header from '@/components/navbar/Header'
import WishlistProductCard from '@/components/Wishlist/WishlistProductCard'
import { getAdsItems } from '@/lib/api'
import { Product } from '@/lib/type'
import React from 'react'

const page = async () => {

  const session = await auth()
  const loggedInUser = session?.user?.email

  const ads = await getAdsItems(loggedInUser!)

  if (!loggedInUser) {
    return <FirstLogin feature='post your ad or access this feature'/>;
  }
  
  return (
    <div>
      <Header/>
      {ads.map((product: Product) => (
            <Ads product={product} key={product.id}/>
        ))}
    </div>
  )
}

export default page
