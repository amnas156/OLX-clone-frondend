import { auth } from "@/auth";
import MessageForm from "@/components/chat/MessageForm";
import Messages from "@/components/chat/Messages";


import { getChatBySlug } from "@/lib/api";
import ChatHeder from "@/components/chat/chatHeder";

type Props = {
    params: { slug: string };
};

export default async function ChatSlugPage({ params }: Props) {
    const { slug } = params;
    const chat = await getChatBySlug(slug);
    const chatId = chat.id
    const session = await auth()
    const loggedInUser = session?.user?.email
    const messages = chat.messages
    
    return (
        <div className="h-screen bg-gray-100">
            <ChatHeder chat={chat} currentUserEmail={loggedInUser}/>
            <Messages currentUserEmail={loggedInUser!} messages={messages}/>
            <MessageForm chatId={chatId} senderEmail={loggedInUser!}/>
        </div>
    );
}
