import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoSnapchat } from "react-icons/bi";
const Footer = () => {
  return (
    <footer>
      <img
        className="absolute opacity-25"
        src="/assets/bg/footerbg.jpg"
        alt=""
      />
      <section className="relative p-10 grid grid-cols-3 justify-between items-center">
        <article className="space-y-10" >
          <img src="/assets/Logo.png" alt="" />
          <div className="gap-4  ">
          <h2 className="text-[#FF2A70] text-xl">LOCATION</h2>
          <p className>Kompagnistræde 278</p>
          <p className>1265 Købehavn K</p>
          </div>
          <div>
          <h2 className="text-[#FF2A70] text-xl">Opening Hours</h2>
          <p >wed - thu 10:30 pm to 3 am</p>
              <p >sat - sun 11 pm to 5 am</p>
          </div>
        </article>
        <article className="space-y-10">
          <h2 className="text-[#FF2A70] text-2xl">RECENT POSTS</h2>
          <div className="flex gap-4 ">
            <img
              src="/assets/content-img/recent_post1.jpg"
            />
            <div>
              <p >
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
              <p className="text-[#FF2A70] ">April 17, 2018</p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <img
              src="/assets/content-img/recent_post2.jpg"
            />
            <div>
              <p >
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
              <p className="text-[#FF2A70] ">April 17, 2018</p>
            </div>
          </div>
        </article>
        <article className="space-y-10">
          <h2 className="text-[#FF2A70] text-2xl">RECENT TWEETS</h2>
          <div className="flex gap-4  ">
          <BsTwitter className="text-[#FF2A70] text-2xl "/>
            <div>
              <p >
              It is a long established fact that a reader will be distracted by the readable... 
              </p>
              <p className="text-[#FF2A70] ">5 hours ago</p>
            </div>
          </div>
          <div className="flex gap-4">
          <BsTwitter className="text-[#FF2A70] text-2xl"/>
            <div>
              <p >
              It is a long established fact that a reader will be distracted by the readable... 
              </p>
              <p className="text-[#FF2A70] ">5 hours ago</p>
            </div>
          </div>
        </article>
      </section>
      <section className="relative bg-black flex justify-between px-10 p-5 items-center">
        <p>
          Night Club PSD Template - All Rights Reserved
        </p>
        <div>
          <h2 className="text-center text-lg">Stay Connected With Us</h2>
          <div className="flex text-3xl gap-5">
            <BiLogoFacebook className="border " />
            <BsTwitter className="border" />
            <BiLogoSnapchat className="border " />
            <BsInstagram className="border " />
          </div>
        </div>
        <p>Copyright © 2018 NightClub</p>
      </section>
    </footer>    
  );
};

export default Footer;
