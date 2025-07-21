import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Category } from '@/lib/type'
import { BASE_URL } from '@/lib/config'




const CategoryCard = ({cat}: {cat:Category}) => {
  return (
    <Link href={`category/${cat.slug}`} className=" text-center ">
        <div className=" bg-[#f2f4f5] rounded-[8px] flex flex-col items-center text-center justify-center p-4">
          <Image src={`${BASE_URL}${cat.icon}`} alt={cat.name} width={40} height={40} className='w-[44px] h-[44px] block' />
        </div>
        <p className="font-semibold text-sm mt-3 text-gray-800">{cat.name}</p>
    </Link>
  )
}

export default CategoryCard