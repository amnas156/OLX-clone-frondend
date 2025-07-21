import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

interface User {
  loggedInUser: {
    name: 'string';
    email: 'string';
    image: 'string';
  };
} 

const MobileNavbar = ({loggedInUser}: User) => {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent side="left" >
        <SheetHeader>
          <SheetTitle className="items-center">
            <Link href="/">
              <Image 
              src='/image/olx_logo.svg'
              alt="logo"
              width={60}
              height={20}
              />
            </Link>
          </SheetTitle>
          <NavItems loggedInUser={loggedInUser}/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
