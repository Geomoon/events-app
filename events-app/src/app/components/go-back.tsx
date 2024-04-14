"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export const GoBack = () => {
  const router = useRouter();

  return (
    <button onClick={router.back}>
      <IoMdArrowBack className="size-5" />
    </button>
  );
};
