'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Chat } from '@/lib/type';
import { BASE_URL } from '@/lib/config';
import { formatPostedDateTime } from '@/lib/formatPostedDateTime';



const ChatCard = ({ chat, currentUserEmail }: { chat: Chat, currentUserEmail: string | undefined | null }) => {
    const { slug, product, last_message, buyer, seller } = chat;

return (
    <Link href={`/chat/${slug}`} className="block">
        <div className="flex items-center gap-4 p-4 hover:bg-gray-100 border-b">
            <div className="w-32 h-32  overflow-hidden bg-gray-200 relative">
            {product.name ? (
                <Image
                    src={`${BASE_URL}${product.featured_image}`}
                    alt={product.name || "Product image"}
                    fill
                    className="object-cover"
                />
            ) : (
                <div className="w-full h-full bg-gray-300"></div>
            )}
            </div>

            <div className="flex flex-col flex-1">
                <div className='flex justify-between'>
                    <div className="font-bold text-2xl">
                        {chat.seller.email === currentUserEmail
                        ? chat.buyer.username
                        : chat.seller.username}
                    </div>
                    <span className='text-md text-gray-500' >{last_message?.timestamp ? formatPostedDateTime(last_message.timestamp) : ''}</span>
                </div>
            
                <div className="font-semibold text-xl text-gray-600">{product.name}</div>
                <div className="text-xs text-gray-400 truncate">
                    {last_message?.text || 'No messages yet'}
                </div>
            </div>
        </div>
        </Link>
    );
};

export default ChatCard;
