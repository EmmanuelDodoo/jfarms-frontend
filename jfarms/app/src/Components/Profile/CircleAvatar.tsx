import Image from "next/image";

type props = {
  src: string;
  alt: string;
};

/** Create a circle avatar component with the given `src` and `alt` values */
export default function CircleAvatar({ src, alt }: props) {
  return (
    <div className=" w-28 aspect-square rounded-full relative overflow-hidden outline-offset-1 outline outline-fuchsia-200">
      <Image
        src={src}
        alt={alt}
        fill={true}
      />
    </div>
  );
}
