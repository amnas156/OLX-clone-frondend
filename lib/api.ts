import axios from "axios";




export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', 
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
    
},
});


export async function getExistingUserUser(email: string | null | undefined){
    try{
        const response = await api.get(`existing_user/${email}`);
        return response.data
    }

    catch(err:unknown){
        if(err instanceof Error){
            throw new Error(err.message);
        }

        throw new Error('an unknown error occured');
    }
}


export async function createNewUser(data: {
    email: string | null | undefined;
    username: string | undefined;
    first_name: string | null | undefined;
    last_name: string | null | undefined;
    profile_picture_url: string | null;
}) {
    try {
        const response = await api.post('create_user/', data);
        return response.data;
    } catch (err: unknown) {
        if (err instanceof Error) {
        throw new Error(err.message);
        }
        throw new Error('an unknown error occurred');
    }
}


export async function getCategories() {
    try{
        const response = await api.get('category_list')
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getCategory(slug:string) {
    try{
        const response = await api.get(`category/${slug}`)
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getFreshRecommendations() {
    try {
        const response = await api.get('/fresh_recommendations/')
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getProducts() {
    try{
        const response = await api.get('product_list')
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getProduct(slug:string) {
    try{
        const response = await api.get(`products/${slug}`)
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getChatBySlug(slug: string) {
    try {
        const response = await api.get(`chats/${slug}/`);
        return response.data;
    } catch (err: any) {
        console.error('Failed to fetch chat:', err);

        if (err.response && err.response.status === 404) {
        return null; 
        }

        if (err instanceof Error) {
        throw new Error(err.message);
        }

        throw new Error('An unknown error occurred');
    }
}

export async function getSearchProducts(searchInput: string | null | undefined) {
    
    if(searchInput){
        
        try{
            const response= await api.get(`search?query=${searchInput}`)
            return response.data
        }
        catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
        }
    }
}

export async function getWishlistItems(email: string) {
    try{
        const response = await api.get(`wishlist/${email}/`)
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getAdsItems(email: string) {
    try{
        const response = await api.get(`user-ads/${email}/`)
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}

export async function getChatList(email: string) {
    try{
        const response = await api.get(`chats/${email}/`)
        return response.data
    }
    catch(err:unknown){
        if (err instanceof Error){
            throw new Error(err.message)
        }
        throw new Error('un unknow error occured')
    }
}