import React from 'react'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'


const Header = async() => {

    const session = await auth()
    const loggedInUser = session?.user

    return (
        <div className='bg-white shadow-md top-0 py-4 w-full mb-12'>
            <div className='w-[95%] mx-auto'>
                <div className="flex gap-6 items-center">
                    <MobileNavbar loggedInUser={loggedInUser!} />
                    <Link href="/">
                        <Image
                        src="/image/olx_logo.svg"
                        alt="logo"
                        width={40}
                        height={10}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
