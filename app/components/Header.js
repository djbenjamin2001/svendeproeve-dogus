import Navigation from "./Navigation";
const Header = () => {
    return (
        <>
        <header className="flex border border-pink-500 p-5 border-r-0 border-l-0 ">
          <div className="flex  items-center mx-auto justify-between gap-[40rem]">
        <img src="/assets/Logo.png" alt="" />
<Navigation/>
</div>
    </header>
   
        </>
      );
}
 
export default Header;