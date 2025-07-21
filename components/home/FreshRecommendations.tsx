import React from 'react'
import { getFreshRecommendations } from '@/lib/api'
import ProductCard from './ProductCard'
import { Product } from '@/lib/type'
import { auth } from '@/auth'

const FreshRecommendations = async () => {
    const products: Product[] = await getFreshRecommendations()
    const session = await auth()
    const user = session?.user
    const userEmail = user?.email

    const featured = products.filter(p => p.featured).slice(0, 2)
    const nonFeatured = products.filter(p => !p.featured).slice(0, 13)

    const combined = [...featured, ...nonFeatured] // total max: 15

    return (
        <section className="w-[90%] padding-x mx-auto my-16">
        <h2 className="my-8 text-2xl font-bold text-gray-900">Fresh Recommendations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {combined.map((product) => (
                <ProductCard key={product.id} product={product} userEmail={userEmail!} />
            ))}
            </div>
        </section>
    )
}

export default FreshRecommendations
