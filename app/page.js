"use client"
import Eventslider from "./components/Eventslider";
import { useState, useEffect } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="bg-[url('/assets/bg/pattern_bg.jpg')]">
      {loading?
      <img src="/assets/loader/madbars.gif" alt="" />
      :
      <section className="relative flex justify-center items-center">
        <img
          className="h-[800px] w-full"
          src="/assets/bg/header_bg_1.jpg"
          alt=""
          loading="eager"
        />
        <div className="absolute items-center flex flex-col">
          <img
            className="animate-flip-down  animate-delay-100"
            src="/assets/Logo-1.png"
            alt=""
            loading="eager"
          
          />
          <p className="animate-flip-up animate-duration-1000 animate-delay-500 animate-ease-in-out text-5xl">HAVE A GOOD TIME</p>
          <img src="/assets/bottom_line.png" alt="" />
        </div>
      </section>
    }
      
    </main>
  );
}
