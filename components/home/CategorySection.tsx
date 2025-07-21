import React from 'react'
import CategoryCard from './CategoryCard'
import { Category } from '@/lib/type'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io"
import { getCategories } from '@/lib/api'

const CategorySection = async () => {
  const categories: Category[] = await getCategories()

  return (
    <section className="w-[90%] mx-auto my-8">
      <div className="overflow-x-auto scrollbar-hide">
        <div className='flex gap-6'>
          <div
            className="grid grid-rows-2 auto-cols-[minmax(120px,_1fr)] grid-flow-col gap-4"
            style={{ minWidth: '720px' }} 
          >
            {categories.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
            <Link
            href={'category'}
            className='w-fit px-4 py-2 mr-2 bg-[#f2f4f5] flex flex-col justify-center items-center rounded-[8px] gap-1'
          >
            <IoIosArrowRoundForward className='text-2xl' />
            <span className='text-[10px] font-bold whitespace-normal'>See all</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategorySection
