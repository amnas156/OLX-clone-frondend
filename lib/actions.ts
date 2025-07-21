'use server'

import { signOut } from "@/auth"
import { api } from "./api";

export async function signOutUser() {
    await signOut({redirectTo:'/'})
}


export async function startChat(productId: number, buyerEmail: string) {
    try{
        const response = await api.post("chats/start/", {
    product: productId,
    buyer: buyerEmail,
  });
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function sendMessage(
  chatId: number,
  senderEmail: string,
  text: string) {
    try{
      const response = await api.post("chats/send/", {
        chat_id: chatId,
        sender_email: senderEmail,
        text: text,
      });
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function toggleWishlist(productId: number, email: string) {
    try{
      const response = await api.post(`wishlist/toggle/`, {
          product_id: productId,
          email: email,
      })
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function deleteProduct(id: number) {
    try{
    const response = await api.delete(`delete_product/${id}/`);
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function postProduct(formData: FormData) {
    try {
    const res = await api.post(`post_product/`, formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
}
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}


