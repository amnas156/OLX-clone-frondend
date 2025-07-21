'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Login = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-2/3 space-y-5 border-2 p-4 rounded-[3px]'>
                <h6 className='text-3xl font-semibold'>Welcome Olx!</h6>
                <p className='text-md '>To access personalized features such as saving items to your wishlist or posting new ads, please log in to your account. You can sign in quickly and securely using your Google account. We never share your information without your consent.</p>
                <button
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className=" w-2/3 mx-auto flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 rounded-lg shadow-sm bg-white hover:bg-gray-100"
                >
                <Image
                    src="/image/google.png"
                    alt="Google"
                    width={24}
                    height={24}
                    className="mr-3"
                />
                Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
