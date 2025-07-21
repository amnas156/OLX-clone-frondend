import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import { getCategories } from '@/lib/api';
import { Category } from '@/lib/type';
import CategoryFormCard from '@/components/category/CategoryFormCred';
import { auth } from '@/auth';
import SigninButton from '@/components/Button/SigninButton/SigninButton';
import FirstLogin from '@/components/home/FirstLogin';
import Header from '@/components/navbar/Header';

const PostCategoryForm = async () => {
  const categories = await getCategories();
  const session = await auth();
  const loggedInUser = session?.user;

  if (!loggedInUser) {
    return <FirstLogin feature='post your ad or access this feature'/>;
  }

  return (
    <section className='min-max-width'>
      <Header/>
      <div className='w-1/2 mx-auto'>
        <div className='w-full text-2xl text-center p-4 uppercase font-bold'> 
          <h6>Post your Ad</h6>
        </div>
        <div className='w-full border-2 my-4'>
          {categories.map((cat: Category) => (
            <CategoryFormCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostCategoryForm;
