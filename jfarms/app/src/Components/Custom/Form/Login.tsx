"use client";
import jfarmsLogo from "p/jfarms-logo-files/png/logo-no-background.png";
import facebookLogo from "p/facebook-logo-no-background.png";
import googleLogo from "p/google-logo-no-background.png";

import Image from "next/image";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

export default function CustomLoginForm() {
  return (
    <div className=" px-8 py-8 flex flex-col justify-center items-center dark:outline rounded-md font-semibold shadow-xl bg-teal-100 dark:bg-slate-900 text-black dark:text-slate-200 outline-slate-700 dark:shadow-slate-800">
      <div>
        <Image
          src={jfarmsLogo}
          alt="Jfarms Logo"
          width={65}
          height={65}
          loading="lazy"
          className=""
        />
      </div>
      <h2 className=" text-2xl font-bold mt-4 mb-8 ">Welcome Back</h2>
      <form
        action=""
        name="login"
        className=" w-fit mb-4"
      >
        <CustomInput
          label="Email"
          type="email"
          name="email"
          colorScheme="emerald"
          variant="line"
          floatLabel
          placeholder="kwakumensah@example.com"
          size={30}
        />
        <CustomInput
          label="Password"
          type="password"
          name="password"
          colorScheme="emerald"
          variant="line"
          floatLabel
          placeholder="password"
          size={30}
        />
        <div className="flex justify-between items-center text-xs my-4 ">
          <div className="flex items-center gap-0.5">
            <CustomInput
              type="checkbox"
              colorScheme="emerald"
              name="remember"
              id="remember-me"
            />
            <label
              htmlFor="remember-me"
              className="text-emerald-700 dark:text-emerald-300 "
            >
              Remember me
            </label>
          </div>
          <a
            href=""
            className="text-rose-400 italic"
          >
            Forgot password?
          </a>
        </div>

        <div className="flex justify-center">
          <CustomButton
            colorScheme="emerald"
            type="submit"
          >
            Sign In
          </CustomButton>
        </div>
      </form>

      <div className=" w-full flex items-center my-4 ">
        <div className=" flex-grow h-[1px] rounded-full bg-slate-300 dark:bg-slate-600 "></div>
        <p className="mx-1.5">Or</p>
        <div className=" flex-grow h-[1px] rounded-full bg-slate-300 dark:bg-slate-600 "></div>
      </div>
      <div className="flex gap-2 items-center">
        <a href="">
          <Image
            src={googleLogo}
            alt="Sign in with Google"
            width={35}
            height={35}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
        </a>
        <a href="">
          <Image
            src={facebookLogo}
            alt="Sign in with Apple"
            width={35}
            height={35}
            loading="lazy"
            style={{
              borderRadius: "50%",
            }}
          />
        </a>
      </div>
      <p className=" text-sm mt-8">
        Don't have an account?{" "}
        <a
          href=""
          className="text-rose-400 "
        >
          Sign up!
        </a>
      </p>
    </div>
  );
}
