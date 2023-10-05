"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
const getData = async () => {
  let res = await fetch("http://localhost:4000/events");
  return await res.json();
};
const Eventslider = async () => {
  const events = await getData();
  console.log(events);
  return (
    <section className="relative flex justify-center items-center">
        <img src="/assets/bg/slider_bg_overlay.png" alt="" />
       
    <div className=" max-w-4xl mx-auto absolute text-center"> 
     
    <h1 className="text-semibold text-xl">EVENTS OF THE MONTH</h1>
      <div className="swiper-pagination"></div>
      <Swiper
        slidesPerView={2}
        spaceBetween={32}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        loop={true}
        autoplay={false}
      >
           <section className="max-w-4xl pb-5  gap-[2rem] grid grid-cols-3 mx-auto text-center">
          {events.map((Events) => (
            <SwiperSlide>
              <section className="bg-pink-500" >
                <div className="h-[25rem]">
                <img
                  className="w-[100%] h-[100%]  "
                  src={Events.asset.url}
                  alt=""
                />
                </div>
                <div className="flex text-center justify-evenly">
                <p>
                    {Events.title}
                </p>
                <p>
                    {Events.location}
                </p>
                </div>
              </section> 
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </div>
    </section>
  );
};

export default Eventslider;
