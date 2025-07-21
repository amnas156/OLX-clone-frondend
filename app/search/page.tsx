import { getSearchProducts } from '@/lib/api'
import React from 'react'

import { Product } from '@/lib/type' 
import ProductCard from '@/components/home/ProductCard'
import { auth } from '@/auth'
import Header from '@/components/navbar/Header'

interface SearchPageProps {
  searchParams: {
    query?: string | null
  }
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const query = searchParams?.query || ''
  const searchProducts: Product[] = await getSearchProducts(query)
  const session = await auth()
  const logInUser = session?.user?.email

  return (
    <>
      <Header/>
      <div className="w-[90%] mx-auto my-8">
        <h1 className="text-xl font-bold mb-4">Search Results for: "{query}"</h1>
        
        {searchProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {searchProducts.map((product) => (
              <ProductCard key={product.id} product={product} userEmail={logInUser!} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchPage
