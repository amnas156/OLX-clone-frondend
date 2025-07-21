import CategoryCard from '@/components/home/CategoryCard'
import Header from '@/components/navbar/Header'
import { getCategories } from '@/lib/api'
import { Category } from '@/lib/type'
import React from 'react'

const categoryList = async() => {

    const categories = await getCategories()
    return (
        <div>
            <Header/>
            {categories.map((cat: Category) => <CategoryCard key={cat.id} cat={cat}/>)}
        </div>
    )
}

export default categoryList
