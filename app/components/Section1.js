const Section1 = () => {
    return ( 
        <main className="flex justify-center gap-4 border-none p-10">
               <article className="relative">
  <div className="group">
    <img  src="/assets/content-img/thumb1.jpg" alt="" />
    <section className="absolute flex flex-col justify-center items-center bg-black  inset-0 bg-opacity-0 group-hover:bg-opacity-70 duration-500 delay-500">
     
      <div className=" opacity-0 group-hover:opacity-100 hover:animate-fade-left  absolute inset-0 flex flex-col justify-center items-center duration-500 delay-500">
        <p className="text-xl font-bold">NightClub</p>
    <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui accusantium modi ut in maxime dolorem cum ab? Voluptatem, quae?</p> 
      </div>
    </section>
  </div>
</article>
               <article className="relative">
  <div className="group">
    <img className="w-[380px] h-[473px]" src="/assets/content-img/reastaurant_1.jpg" alt="" />
    <section className="absolute flex flex-col justify-center items-center bg-black  inset-0 bg-opacity-0 group-hover:bg-opacity-70 duration-500 delay-500">
     
      <div className=" opacity-0 group-hover:opacity-100 hover:animate-fade-left  absolute inset-0 flex flex-col justify-center items-center duration-500 delay-500">
        <p className="text-xl font-bold">Restuarant</p>
    <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui accusantium modi ut in maxime dolorem cum ab? Voluptatem, quae?</p> 
      </div>
    </section>
  </div>
</article>
               <article className="relative">
  <div className="group">
    <img  className="w-[380px] h-[473px]" src="/assets/content-img/thumb2.jpg" alt="" />
    <section className="absolute flex flex-col justify-center items-center bg-black  inset-0 bg-opacity-0 group-hover:bg-opacity-70 duration-500 delay-500">
     
      <div className=" opacity-0 group-hover:opacity-100 hover:animate-fade-left  absolute inset-0 flex flex-col justify-center items-center duration-500 delay-500">
        <p className="text-xl font-bold">BAR</p>
    <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui accusantium modi ut in maxime dolorem cum ab? Voluptatem, quae?</p> 
      </div>
    </section>
  </div>
</article>

          
        </main>
     );
}
 
export default Section1;