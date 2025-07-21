'use client';

import { useRouter } from 'next/navigation';
import { startChat } from '@/lib/actions';

type Props = {
  productId: number;
  userToken?: string;
};

const ChatButton = ({ productId, userToken }: Props) => {
  const router = useRouter();

  const handleChat = async () => {
    if (!userToken) {
      alert('Login required to start chat');
      return;
    }

    try {
      const chat = await startChat(productId, userToken);
      if (chat?.slug) {
        console.log('Navigating to /chat/' + chat.slug);
        router.push(`/chat/${chat.slug}`);
      } else {
        alert('Invalid response from server.');
        console.error('Missing slug in response:', chat);
      }
    } catch (error) {
      alert('Failed to start chat');
      console.error('Chat creation failed:', error);
    }
  };

  return (
    <button
      onClick={handleChat}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
    >
      Chat with Seller
    </button>
  );
};

export default ChatButton;
