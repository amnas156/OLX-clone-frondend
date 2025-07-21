import React from 'react'
import Link from 'next/link'
import { Plus } from "lucide-react";

const SellButton = () => {
  return (
    <div>
      <Link className='flex gap-0.5 justify-center items-center border-[#ffce32] border-r-blue-500 border-b-[#0078fa] border-t-[#42b3ad] px-4 w-32  fixed bottom-4 left-1/2  border-8 rounded-4xl  font-bold bg-white ' href='post'>
        <Plus/>
        <span className='text-[#004896] text-lg' >SELL</span>
      </Link>
    </div>
  )
}

export default SellButton
