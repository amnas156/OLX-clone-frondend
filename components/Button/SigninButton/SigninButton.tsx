'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from '@/components/ui/dialog'

export default function SigninButton() {
    return (
        <Dialog>
        <DialogTrigger className='mx-auto rounded-[3px] h-8 w-64  bg-[#004896] text-xl font-bold text-white'>
            Login
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Welcome!</DialogTitle>
            <DialogDescription>
                <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className="w-full flex items-center cursor-pointer justify-center border border-gray-300 hover:border-gray-500 text-gray-700 font-medium py-3 rounded-lg shadow-sm transition-all duration-300 bg-white hover:bg-gray-100"
                >
                <Image
                    src="/image/google.png"
                    alt="Google Icon"
                    width={30}
                    height={30}
                    className="mr-3"
                />
                Continue with Google
                </button>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}
