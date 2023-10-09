import Link from "next/link";
const Takforreserving = () => {
    return ( 
        <main >
     <section className="relative flex justify-center items-center" >
      <img className=" h-[272px] w-full" src="/assets/bg/pattern_bg.jpg" alt="" />
      <div className="absolute text-center ">
      <h1 className=" m-auto text-2xl">THANK YOU FOR RESERVING A TABLE</h1>
      <p>Please return to the frontpage to explore some more</p>
    <Link href="/"> return home </Link>
      </div>
     </section>
        </main>
     );
}
 
export default Takforreserving;