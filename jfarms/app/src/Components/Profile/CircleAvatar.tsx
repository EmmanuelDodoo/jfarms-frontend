import Image from "next/image";

type props = {
  src: string;
  alt: string;
};

/** Create a circle avatar component with the given `src` and `alt` values */
export default function CircleAvatar({ src, alt }: props) {
  return (
    <div className=" w-28 bg-indigo-200 aspect-square rounded-full relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes="112px"
      />
    </div>
  );
}
