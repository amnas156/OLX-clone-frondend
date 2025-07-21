import React from 'react'
import NavBar from './NavBar'
import { auth } from '@/auth'

const NavBarContainer = async ({ categoryName }: { categoryName: string }) => {
  const session = await auth()
  const user = session?.user

  return (
    <header className="bg-white shadow-md sticky top-0 py-4 w-full">
      <nav className='w-[98%] mx-auto relative'>
        <NavBar loggedInUser={user!} categoryName={categoryName} />
      </nav>
    </header>
  )
}

export default NavBarContainer
