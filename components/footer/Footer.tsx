import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='min-max-width bg-[#004896]'>
            <div className='w-4/5 mx-auto py-4'>
                <div>
                    <Image className='mx-auto' src='/image/cartrade_tech.svg' alt='cartrade_tech' width={100} height={100}/>
                </div>
                <ul className='flex flex-wrap justify-center items-center'>
                    <li className='w-1/3'><Image className='mx-auto' src='/image/olx_2025.svg' alt='olx_logo' width={50} height={30}/></li>
                    <li className='w-1/3'><Image className='mx-auto' src='/image/carwale.svg' alt='carwale' width={60} height={40}/></li>
                    <li className='w-1/3'><Image className='mx-auto' src='/image/bikewale.svg' alt='bikewale' width={60} height={40}/></li>
                    <li className='w-1/3'><Image className='mx-auto' src='/image/cartrade.svg' alt='cartrade' width={60} height={40}/></li>
                    <li className='w-1/3'><Image className='mx-auto' src='/image/mobility.svg' alt='mobility' width={60} height={40}/></li>
                </ul>
                <div className='pt-4'>
                    <p className='text-[10px] text-white text-center font-semibold'>All rights reserved © 2006-2025 OLX</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
