import React from 'react'
import  {getCategory } from '@/lib/api'
import {  Product } from '@/lib/type'
import NavBarContainer from '@/components/navbar/NavBarContainer'
import CategoryProductCard from '@/components/category/CategoryProductCard'



const CategoryPage = async ({params}: {params: Promise<{slug: string}>}) => {

    const {slug} = await params

    const  category= await getCategory(slug)
    const products = category.products
    

    return (
    <div className='main-max-width mx-auto padding-x py-9'>
        <NavBarContainer categoryName={category.name}/>
        <div>
            {products.map((product: Product) => <CategoryProductCard key={product.id} product={product}/>)}
        </div>
    </div>
    )
}

export default CategoryPage