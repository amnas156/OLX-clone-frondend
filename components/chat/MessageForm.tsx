'use client';

import React, { useState } from 'react';
import { sendMessage } from '@/lib/actions'; 
import { IoSend } from "react-icons/io5";

type Props = {
  chatId: number;
  senderEmail: string;
  onMessageSent?: (message: any) => void;
};

const MessageForm = ({ chatId, senderEmail, onMessageSent }: Props) => {
  const [text, setText] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    

    try {
      const message = await sendMessage(chatId, senderEmail, text);
      if (onMessageSent) onMessageSent(message);
      setText('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
    }
  };

  console.log(text);
  

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2 border-t fixed bottom-0 w-full ">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className={text.length > 0 ? 'fill-white bg-black  p-4 rounded-full  disabled:opacity-50' : 'none'}
      >
      <IoSend className={text.length > 0 ? 'fill-white' : 'fill-transparent'} />
      </button>
    </form>
  );
};

export default MessageForm;