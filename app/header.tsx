import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import Link from "next/link";

export async function Header() {
    const session = await auth()

    return (
      <div className='bg-gray-200 py-2'>
        <div className="container mx-auto px-3">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-2 text-xl font-semibold text-gray-800">
            <span className="text-4xl ">🍓</span>
             <Link href="/">
              <span className="hover:underline flex items-center gap-1">Strawberry</span>
              </Link>

              <div className="space-x-4">
              <Link href="/items/create">
              <span className="hover:underline flex items-center gap-1">Auction an Item</span>
              </Link>

              </div>
            </div>
            <div className="flex items-center gap-4">
            <div>{session?.user?.name }</div>
            <div>  {session ? <SignOut /> : <SignIn />}</div>
            </div>
          </div>
        </div>
      </div>
    )

    
  }
  
