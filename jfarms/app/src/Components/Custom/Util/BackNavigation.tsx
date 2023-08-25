"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackNavigation() {
  const router = useRouter();
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="aspect-square w-4 self-center"
    >
      <path
        fill="currentColor"
        d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275Z"
      />
    </svg>
  );
  return (
    <div className="my-2 mx-2 text-sm font-semibold text-black dark:text-white ">
      <Link
        href=""
        onClick={router.back}
        className="flex w-fit pr-2 items-start underline-offset-1 hover:underline "
      >
        {svg}Go back
      </Link>
    </div>
  );
}
