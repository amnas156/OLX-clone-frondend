'use client'

import React from 'react'
import { FaSignInAlt } from "react-icons/fa"
import SigninButton from '../Button/SigninButton/SigninButton'

type Props = {
    feature?: string  
}

const FirstLogin = ({ feature = "access this feature" }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-4 p-6 bg-white border shadow rounded-lg">
        <FaSignInAlt size={48} className="text-gray-600" />
        <h2 className="text-2xl font-semibold">You must be signed in</h2>
        <p className="text-gray-500">Please sign in to {feature}.</p>
        <SigninButton />
        </div>
    )
}

export default FirstLogin
