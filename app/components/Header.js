import Navigation from "./Navigation";
const Header = () => {
    return (
        <>
        <header className="flex">
          <div className="flex  items-center mx-auto justify-between gap-[40rem]">
        <img src="/assets/Logo.png" alt="" />
<Navigation/>
</div>
    </header>
   
        </>
      );
}
 
export default Header;