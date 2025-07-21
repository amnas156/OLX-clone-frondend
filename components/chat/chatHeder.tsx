import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { Chat } from '@/lib/type';
import { BASE_URL } from '@/lib/config';

const ChatHeder = ( {chat, currentUserEmail} : {chat:Chat, currentUserEmail:string | undefined | null} ) => {

    const { slug, product, last_message, buyer, seller } = chat;
    return (
        <header className='sticky top-0 '>
            <section className='bg-[white] shadow-md p-4'>
                <div className='flex w-[95%] mx-auto  '>
                    <div className='items-center p-6'>
                        <Link href={'/chat'}>
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <Link href={`/products/${chat.product.slug}`}>
                        <div className='w-16 h-16'>
                            <Image 
                            src={`${BASE_URL}${product.featured_image}`}
                            alt={product.name}
                            width={20}
                            height={20}
                            className='w-full h-full rounded'
                            />
                        </div>
                    </Link>
                    <div className='p-4 capitalize font-bold text-xl text-black '>
                            {chat.seller.email === currentUserEmail
                            ? chat.buyer.username
                            : chat.seller.username}
                    </div>
                </div>
            </section>
            <section className='bg-[white] my-3'>
                <div className="w-[95%] mx-auto p-3 flex gap-32">
                    <span className='text-md text-black capitalize' >{product.name}</span>
                    <span className='text-md text-black'>₹ {Number(product.price).toLocaleString()}</span>
                </div>
            </section>
        </header>
    )
}

export default ChatHeder
