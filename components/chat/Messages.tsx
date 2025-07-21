import React from 'react';
import { Message } from '@/lib/type';
import Image from 'next/image';

type Props = {
    messages: Message[];
    currentUserEmail: string;
};

const Messages = ({ messages, currentUserEmail }: Props) => {
    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase();
};

    let lastDate = '';

return (
    <div className="flex flex-col gap-2 p-4 overflow-y-auto bg-gray-100 min-h-screen">
        {messages.map((msg, index) => {
        const isOwn = msg.sender.email === currentUserEmail;
        const msgDate = formatDate(msg.timestamp);

        const showDate = msgDate !== lastDate;
        if (showDate) lastDate = msgDate;

        return (
            <React.Fragment key={msg.id}>
                {showDate && (
                <div className="text-center text-xs font-semibold text-gray-600 my-2">
                    {msgDate}
                </div>
                )}

                <div className={`flex items-end ${isOwn ? 'justify-end' : 'justify-start'} gap-2`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg shadow-sm text-sm ${
                    isOwn ? 'bg-blue-100 text-black' : 'bg-gray-200 text-black'
                }`}>
                    {msg.text}
                    <div className="text-xs mt-1 flex items-center justify-end gap-1 text-gray-500">
                    {formatTime(msg.timestamp)}
                    
                    </div>
                </div>
                </div>
            </React.Fragment>
            );
        })}
        </div>
    );
};

export default Messages;
