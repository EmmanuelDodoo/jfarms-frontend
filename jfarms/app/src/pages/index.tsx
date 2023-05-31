import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "../app/App";
import reportWebVitals from "./reportWebVitals";
import ProfileHeader from "@/Components/Profile/Header";
import AltHeader from "@/Components/Profile/AltHeader";
import Details from "@/Components/Profile/Details";

// const rt = document.getElementById("root");

function myApp() {
  return (
    <div id="myApp">
      <App />
    </div>
  );
}

function altApp() {
  return (
    <div className="my-4 gap-4 flex flex-col xs:items-center lg:items-start lg:mx-2">
      {/* <ProfileHeader /> */}
      <AltHeader />
      {/* <Details /> */}
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// export default myApp;
export default altApp;
