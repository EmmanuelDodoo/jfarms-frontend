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
  return (
    <div className="my-4 gap-4 flex flex-col xs:items-center lg:items-start lg:mx-2">
      {/* <ProfileHeader /> */}
      <AltHeader />
      {/* <Details /> */}
      <AltDetails />
    </div>
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
// export default altApp;
export default testApp;
