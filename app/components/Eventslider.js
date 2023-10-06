"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const Eventslider = () => {
  const url = "http://localhost:4000/events";
  const [events, setEvents] = useState([]);

  const sliderBackendData = async () => {
    const data = await fetch(url);
    const events = await data.json();
    setEvents(events);
  };
  useEffect(() => {
    sliderBackendData();
  }, []);

  return (
    <section className="relative flex justify-center items-center">
      <img src="/assets/bg/slider_bg_overlay.png" alt="" />

      <div className="max-w-4xl mx-auto absolute text-center">
        <h1 className="m-auto text-2xl">EVENTS OF THE MONTH </h1>
        <div className="swiper-pagination"></div>
        <Swiper
          slidesPerView={2}
          spaceBetween={32}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Pagination, Autoplay]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          loop={false}
          autoplay={true}
        >
          <section className="max-w-4xl pb-5 gap-[2rem] grid grid-cols-3 mx-auto text-center">
            {events.map((event) => (
              <SwiperSlide>
               <article className="relative">
  <div className="group">
    <img className="w-[467px] h-[267px]" src={event.asset.url} alt="" />
    <section className="absolute flex flex-col justify-center items-center bg-black border inset-0 bg-opacity-0 group-hover:bg-opacity-70 duration-500 delay-500">
      <div className="hover:animate-fade-down pb-[10rem] absolute inset-0 flex flex-col justify-center items-center duration-500 delay-500">
        <Link
          href="/booking"
          className="bg-pink-500 text-white p-2 w-[10rem] opacity-0 group-hover:opacity-100 "
        >
          Book
        </Link>
      </div>
      <div className="bg-black group-hover:bg-opacity-40 text-white p-5 absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 duration-500 delay-500 ">
       <div className=" justify-between  ">
        <p >{event.title}</p>
        {event.description.length > 100
    ? `${event.description.substring(0, 200)}`
    : event.description}
        </div>
      </div>
    </section>
  </div>
</article>
              
              </SwiperSlide>
            ))}
          </section>
        </Swiper>
      </div>
    </section>
  );
};

export default Eventslider;
