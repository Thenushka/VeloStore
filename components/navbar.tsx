"use client";


import  Link  from "next/link"
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  // Transparent only on home page
  const isHome = pathname === "/";

  console.log("Current path:", pathname, "isHome:", isHome);


  return (
    <nav
  className={`${
    isHome ? "absolute top-4 left-0 w-full z-50 bg-transparent text-white" : "sticky top-0 w-full z-50 bg-white shadow-md"
  }`}
>

      <div className="container mx-auto px-6 flex items-center ">
        <Link
          href="/"
          className={`font-bold ${isHome ? "text-white" : "text-black"} hover:text-blue-300`}
        >
          Velo Store
        </Link>

        <div className="flex-1 flex justify-center gap-16">
          <Link href="/" className={`${isHome ? "text-white" : "text-black"} hover:text-blue-300`}>
            Home
          </Link>
          <Link href="/products" className={`${isHome ? "text-white" : "text-black"} hover:text-blue-300`}>
            Products
          </Link>
          <Link href="/checkout" className={`${isHome ? "text-white" : "text-black"} hover:text-blue-300`}>
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};
