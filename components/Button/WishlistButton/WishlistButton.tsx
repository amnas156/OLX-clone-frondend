'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'
import { toggleWishlist } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

type Props = {
  productId: number
  userEmail?: string 
  isWishlisted?: boolean
}

const WishlistButton = ({ productId, userEmail, isWishlisted = false }: Props) => {
  const [wishlisted, setWishlisted] = useState(isWishlisted)
  const router = useRouter()

  const handleToggle = async () => {
    if (!userEmail) {
      toast.warning("Please log in to use wishlist")
      router.push('/login') 
      return
    }

    try {
      const result = await toggleWishlist(productId, userEmail)
      setWishlisted(result.status === 'added')
    } catch (error) {
      console.error('Failed to toggle wishlist:', error)
    }
  }

  return (
    <button
      className= 'rounded-full bg-white p-2'
      onClick={handleToggle}
      aria-label="Toggle wishlist"
    >
      <Heart className={wishlisted ? ' fill-black' : ' text-black'} />
    </button>
  )
}

export default WishlistButton
