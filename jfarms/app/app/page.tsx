import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ProfileHeader from "@/Components/Profile/Header";
import AltHeader from "@/Components/Profile/AltHeader";
import Details from "@/Components/Profile/Details";
import AltDetails from "@/Components/Profile/AltDetails";
import Carousel from "@/Components/Custom/Carousel/Carousel";
import facebookLogo from "p/facebook-logo-alt.png";
import linkedInLogo from "p/linkedin-alt.png";
import instagramLogo from "p/instagram-logo-no-background.png";
import Image from "next/image";

// const rt = document.getElementById("root");

function myApp() {
  return <div id="myApp">No root app yet</div>;
}

function altApp() {
  const imageURLs: string[] = [
    "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://plus.unsplash.com/premium_photo-1664971411348-3e497b7dfb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  ];

  return (
    <section className=" w-screen lg:h-[85%] lg:flex lg:flex-row items-center lg:items-start gap-0">
      <div className=" w-screen lg:w-3/5 h-[65vh] lg:h-full relative -z-50">
        <Carousel
          imageURLs={imageURLs}
          imageSizes="1200px"
          objectFit="cover"
        />
      </div>
      <div className="w-full lg:w-2/5 h-fit lg:h-full flex flex-col ">
        <div className="relative h-fit lg:h-[96%] flex lg:flex-col justify-between px-4 pt-20 lg:pt-2 -z-[1]">
          <h3 className=" text-xs lg:text-sm font-bold w-20 lg:w-28 h-fit ">
            <span>JFarms</span> <span>Agricultural</span> <span>Services</span>
          </h3>
          <h2 className="  font-serif text-3xl lg:text-7xl font-bold italic text-center w-[90vw] lg:w-auto flex flex-col p-3 lg:p-6 absolute lg:relative -top-16 left-1/2 -translate-x-1/2 lg:translate-y-1/4 bg-green-500/5 dark:bg-green-800/10 lg:bg-inherit backdrop-blur-sm lg:backdrop-blur-none ">
            <div>
              <span className="">Feeding</span>{" "}
              <span className="text-green-600 ">Africa,</span>{" "}
            </div>
            <span>Growing</span>
            <span className="text-green-600 ">Futures</span>
          </h2>

          <div className="font-semibold self-end px-2 py-1 flex flex-col items-end ">
            <p className=" text-right text-xs lg:text-sm w-40 mb-4">
              Some call to action over here long looong loooooonnnnnngg
            </p>
          </div>
        </div>
        <a
          href="#services"
          className="font-semibold lg:mr-7 px-4 py-1 outline outline-2 w-fit hover:scale-105 transition-all ease-in uppercase self-center lg:self-end "
        >
          Services
        </a>
      </div>
    </section>
  );
}

function testApp() {
  const imageURLs: string[] = [
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80",
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  return (
    <div>
      <div className="w-screen h-screen ">
        <div className=" w-screen h-[90vh] overflow-hidden absolute -z-50 top-0 left-0">
          <Carousel
            imageURLs={imageURLs}
            imageSizes="1200px"
            objectFit="cover"
          />
        </div>
        <div className=" absolute bottom-40 left-1/2 -translate-x-1/2 w-fit flex flex-col items-center justify-center gap-2 px-12 py-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm ">
          <h2 className=" text-6xl font-bold">JFarms</h2>
          <h4 className="text-2xl font-semibold text-center italic">
            Feading Africa, Growing Futures
          </h4>
        </div>
        <div className="font-semibold absolute -bottom-20 h-40 w-full flex flex-col justify-center items-center">
          {" "}
          <p className=" text-center text-xs lg:text-sm my-2">
            Jfarms Collective, Bolgatanga-East, Upper East Region, Ghana.{" "}
            <span className=" sr-only">Telephone number </span>{" "}
            +233-246-1234-3321. <span className=" sr-only">Email</span>
            info@jfarms.frm
          </p>
          {/* Logos */}
          <div className=" flex items-center justify-center gap-2">
            <a href="">
              <Image
                src={instagramLogo}
                alt="Visit us on Instagram"
                width={35}
                height={35}
                loading="lazy"
                className=" hover:scale-105"
              />
            </a>
            <a href="">
              <Image
                src={facebookLogo}
                alt="Visit us on facebook"
                width={35}
                height={35}
                loading="lazy"
                className=" hover:scale-105"
              />
            </a>
            <a href="">
              <Image
                src={linkedInLogo}
                alt="Visit us on LinkedIn"
                width={35}
                height={35}
                loading="lazy"
                className=" hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

// export default myApp;
export default altApp;
// export default testApp;
