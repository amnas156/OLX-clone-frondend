import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/lib/type'
import { BASE_URL } from '@/lib/config'

const CategoryFormCard = ({cat}:{cat:Category}) => {
    
    return (
        <Link href={`post/${cat.slug}`} className="w-full p-2 bg-white overflow-hidden flex gap-4 justify-start items-center border hover:bg-gray-200">
            <Image src={`${BASE_URL}${cat.icon}`} alt={`${cat.name}`} width={20} height={20}/>
            <p className="font-semibold text-gray-800 text-[12px]">{cat.name}</p>
        </Link>
    )
}

export default CategoryFormCard
