import { auth } from '@/auth';
import ProductPostForm from '@/components/form/postProduct';
import { getCategory } from '@/lib/api';
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const category = await getCategory(slug);
    const session = await auth();
    const loggedInUser = session?.user;
    const loggedInUserEmail = loggedInUser?.email;
    const loggedInUserImage = loggedInUser?.image

    
    

    return (
    <section>
        <div className='w-full p-4 bg-[whitesmoke] shadow-md'>
            <Link href={'/'}>
                <FaArrowLeft />
            </Link>
        </div>
        <ProductPostForm category={category} loggedInUserEmail={loggedInUserEmail!} loggedInUserImage={loggedInUserImage!} />
    </section>
    );
};

export default page;
