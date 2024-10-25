import {
    Sheet,
    SheetContent,  
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Menu } from "lucide-react"
import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between py-4 px-4 max-w-screen-2xl mx-auto">
    <div>
        {/* logo */}
        <h2  className="text-4xl font-bold">logo</h2>
    </div>
        <ul className="hidden md:block">
            <li className="flex gap-3 text-lg">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        
        <Sheet>
  <SheetTrigger className="md:hidden"> <Menu/></SheetTrigger>
  <SheetContent>
        <ul >
            <li className="space-x-5 py-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
  </SheetContent>
</Sheet>
    </header>
  )
}

export default Header
