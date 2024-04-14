import Link from "next/link";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

type props = {
  title: string;
  href: string;
};

export const MainCard: FC<props> = ({ title, href }) => {
  return (
    <Link href={href}>
      <div className="cursor-pointer flex flex-row px-20 py-14 border border-transparent space-x-4 items-center p-6 rounded-sm hover:border hover:border-theme-gray border-card-bg bg-card-bg hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px] hover:shadow-secondary transition-all hover:space-x-8 active:shadow-[2px_2px_0px_0px] active:shadow-secondary ">
        <h2>{title} </h2>
        <FaArrowRight />
      </div>
    </Link>
  );
};
