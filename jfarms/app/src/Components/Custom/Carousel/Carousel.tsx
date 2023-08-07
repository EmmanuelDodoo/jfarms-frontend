"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./styles.css";

type props = {
  objectFit?: "none" | "fill" | "cover" | "contain" | "scale-down";
  imageSizes?: string;
  imageQuality?: number;
  imageLoading?: "eager" | "lazy";
  imageURLs: string[];
};

function produceImage(
  url: string,
  fit?: "none" | "fill" | "cover" | "contain" | "scale-down",
  sizes?: string,
  quality?: number,
  loading?: "eager" | "lazy" | undefined
) {
  const _quality = quality ? Math.abs(quality % 100) : undefined;

  return (
    <div
      className=" w-full h-full absolute "
      aria-hidden
      key={"carousel_slide " + url}
    >
      <Image
        src={url}
        alt="Carousel Image"
        loading={loading}
        fill
        sizes={sizes}
        quality={_quality}
        style={{ objectFit: fit }}
      />
    </div>
  );
}

/** Creates an image carousel. Carousel fully occupies the width
 * and height of its parent
 *
 * @param imageURLs An array of valid urls for the carousel images
 *
 * @param objectfit sets how each image should be resized to fit its container.
 *                  Same as the css property
 *
 * @param imageSizes A string, similar to a media query, that provides
 *                   information about how wide each image will be at
 *                   different breakpoints. Eg "1200px"
 *
 * @param imageQuality The quality of the optimized image, an integer
 *                     between 1 and 100, where 100 is the best quality and
 *                     therefore largest file size. Defaults to 75.
 *
 * @param imageLoading The loading behavior of the image. Defaults to lazy.
 *
 */
export default function Carousel({
  objectFit,
  imageSizes,
  imageQuality,
  imageLoading,
  imageURLs,
}: props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const imageURLs: string[] = [
  //     "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80",
  //     "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //     "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   ];

  useEffect(() => {
    const track = document.querySelector(".carousel-track");
    const slides = track?.children;

    function temp(slides: HTMLCollection | undefined) {
      const nextIndex =
        (currentIndex + 1) % (slides?.length ? slides.length : 0);
      slides?.item(currentIndex)?.toggleAttribute("aria-hidden", false);

      setTimeout(() => {
        slides?.item(currentIndex)?.classList.add("flow-out");
        slides?.item(nextIndex)?.classList.add("flow-in");
      }, 2000);

      setTimeout(() => {
        slides?.item(currentIndex)?.classList.remove("flow-out");
        slides?.item(nextIndex)?.classList.remove("flow-in");
        slides?.item(currentIndex)?.toggleAttribute("aria-hidden", true);
        setCurrentIndex(nextIndex);
      }, 5000);
    }

    temp(slides);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden carousel-track">
      {...imageURLs.map((image) =>
        produceImage(image, objectFit, imageSizes, imageQuality, imageLoading)
      )}
    </div>
  );
}
