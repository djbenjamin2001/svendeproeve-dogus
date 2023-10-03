import Link from "next/link";
const Navigation = () => {
    return ( 
        <nav className="text-lg space-x-4">
        <Link  href="/">Home</Link> &nbsp;
        <Link  href="/blog">Blog</Link>&nbsp;
        <Link   href="/table">Book Table</Link>&nbsp;
        <Link   href="/contact">Contact us</Link>&nbsp;
        <Link   href="/login">Log in</Link>&nbsp;
    
       </nav>
     );
}
 
export default Navigation;