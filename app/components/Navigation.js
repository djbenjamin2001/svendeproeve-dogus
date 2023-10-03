import Link from "next/link";
const Navigation = () => {
    return ( 
        <nav className="text-lg space-x-4">
        <Link className="" href="/">Home</Link> &nbsp;
        <Link href="/">Blog</Link>&nbsp;
        <Link href="/">Book Table</Link>&nbsp;
        <Link href="/">Contact us</Link>&nbsp;
        <Link href="/">Log in</Link>&nbsp;
    
       </nav>
     );
}
 
export default Navigation;