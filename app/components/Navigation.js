"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
const Navigation = () => {
  const [token, setToken] = useState();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  useEffect(() => {
    setToken(getCookie("token"));
  }, [pathname, searchParams]);
  const handleLogout = () => {
    deleteCookie("token");
    router.push("login");
  };
    return ( 

        <nav className="text-lg space-x-4  ">
        <Link className="  hover:text-pink-500 duration-500 delay-150"  href="/">Home</Link> &nbsp;
        <Link className="  hover:text-pink-500 duration-500 delay-150"   href="/booking">Book Table</Link>&nbsp;
        {token && <Link className="  hover:text-pink-500 duration-500 delay-150" href="reservations">My bookings</Link>}&nbsp;
        <Link className="  hover:text-pink-500 duration-500 delay-150"   href="/contact">Contact us</Link>&nbsp;
        {token ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <Link className="  hover:text-pink-500 duration-500 delay-150"  href="login">Login</Link>
      )}
    
       </nav>
     );
}
 
export default Navigation;