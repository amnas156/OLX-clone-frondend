import { auth } from '@/auth'
import ChatCard from '@/components/chat/ChatCard'
import FirstLogin from '@/components/home/FirstLogin'
import { getChatList } from '@/lib/api'
import { Chat } from '@/lib/type'
import React from 'react'

const chatList = async() => {

    const session = await auth()
    const LoggedInUser = session?.user?.email
    const chats = await getChatList(LoggedInUser!) 

    if (!LoggedInUser) {
    return <FirstLogin feature='post your ad or access this feature'/>;
    }

    return (
        <div className='h-screen'>
            {chats.map((chat: Chat) => (
            <ChatCard key={chat.id} chat={chat} currentUserEmail={LoggedInUser!}/>
        ))}
        </div>
    )
}

export default chatList
