"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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

  const indexRef = useRef(0);

  /// Does the toggling of required classes for the slide animation
  function slideAnimator(slides: HTMLCollection | undefined) {
    const currentIndex = indexRef.current;
    const nextIndex = (currentIndex + 1) % (slides?.length ? slides.length : 0);
    slides?.item(currentIndex)?.toggleAttribute("aria-hidden", false);
    slides?.item(currentIndex)?.classList.remove("flow-in");

    setTimeout(() => {
      slides?.item(currentIndex)?.classList.add("flow-out");
      slides?.item(nextIndex)?.classList.add("flow-in");
    }, 2000);

    setTimeout(() => {
      slides?.item(currentIndex)?.classList.remove("flow-out");
      slides?.item(currentIndex)?.toggleAttribute("aria-hidden", true);
      indexRef.current = nextIndex;
    }, 5000);
  }

  useEffect(() => {
    const track = document.querySelector(".carousel-track");
    const slides = track?.children;

    slideAnimator(slides)

    const interval = setInterval(() => slideAnimator(slides), 8000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-full overflow-hidden carousel-track">
      {...imageURLs.map((image) =>
        produceImage(image, objectFit, imageSizes, imageQuality, imageLoading)
      )}
    </div>
  );
}
