export type User = {
    id: number;
    email: string;
    username: string;
};

export interface Product {
    id: number;
    name: string;
    slug: string;
    featured_image: string;
    price: number;
    description: string;
    posted_in: string;
    details: string;
    brand: string;
    images: string;
    owner:string;
    posted_date: string;
    featured: boolean;
    is_wishlisted: boolean
}

export type ProductDetail = {
    id: number;
    name: string;
    slug: string;
    price: number;
    details: string;
    posted_in: string;
    posted_date: string;
    description: string;
    brand: string;
    category: number | null;
    featured: boolean;
    is_wishlisted: boolean;
    owner_picture:string;
    featured_image: string | null;
    images: { id: number; image: string }[];
    owner: User

};

export interface Category{
    id: number;
    image: string;
    icon : string;
    name: string;
    slug: string;
}

export type Message = {
    id: number;
    text: string;
    sender: User;
    timestamp: string;
};

export type Chat = {
    id: number;
    slug: string;
    product: Product;
    last_message: Message | null;
    buyer: User
    seller: User
};

export type WishlistItem = {
    id: number;
    user: string; 
    product: Product;
    created_at: string;
};