import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SigninButton from "../Button/SigninButton/SigninButton";
import { MdAddAPhoto } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { Heart  } from "lucide-react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { signOutUser } from "@/lib/actions";


interface Props{
    mobile?: boolean
    loggedInUser: {
      name: 'string';
      email: 'string';
      image : 'string';
    }
}

const NavItems = ({mobile, loggedInUser}: Props) => {



  return (
    <div className={cn("w-full items-center", mobile ? "flex-col" : "flex-row")}>
    
      {loggedInUser ?
        <>
        <Link
        href="/profile"
        className="text-lg  font-medium text-gray-900 hover:text-gray-700 transition flex gap-1 "
        >
        {loggedInUser.image && (
          <div className="w-[150px] mx-auto h-[150px] rounded-full overflow-hidden border-2 border-black shadow-md relative">
            <Image
              src={loggedInUser.image}
              alt="profile pic"
              className="object-cover"
              fill
            />
            </div>
          
      )}
        </Link>
        <p className="text-2xl w-4/5 mx-auto text-center font-bold my-4">{loggedInUser.name}</p>
        </>
        :
        <>
        <div className="my-4">
          <h6 className="font-bold text-xl">
            Welcome to OLX!
          </h6>
          <p>
            Take charge of your buying and selling journey.
          </p>
        </div>
        
        <SigninButton />
        </>
        }
        <div className="py-6">
            <Link href={'post'} className="flex gap-3 items-center text-center p-4">
              <MdAddAPhoto className="size-8 "/>
              <span className="text-md my-auto font-semibold">Start selling</span>
            </Link>
            <Link href={'/user-ads'} className="flex gap-3 items-center text-center p-4">
              <BiSpreadsheet className="size-8 "/>
              <span className="text-md my-auto font-semibold">My ADS</span>
            </Link>
            <Link href={'/wishlist'} className="flex gap-3 items-center text-center p-4">
              <Heart className="size-8 "/>
              <span className="text-md my-auto font-semibold">Wishlist</span>
            </Link>
            <Link href={'/chat'} className="flex gap-3 items-center text-center p-4">
              <IoChatbubbleOutline className="size-8 "/>
              <span className="text-md my-auto font-semibold">Chat</span>
            </Link>
            {loggedInUser ?
            <>
            <button onClick={signOutUser} className="flex gap-3 items-center text-center p-4">
              <CiLogout className="size-8 "/>
              <span className="text-md my-auto font-semibold">Logout</span>
            </button>
            </>
            :
            <>

            </>
            }
        </div>
    </div>

    
  );
};

export default NavItems;
