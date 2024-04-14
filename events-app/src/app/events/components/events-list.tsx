"use client";

import { useGetEvents } from "@/services";
import { EventCard } from "./event-card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { GoBack } from "@/app/components/go-back";
import { TfiLayoutAccordionList } from "react-icons/tfi";

export const EventsList = () => {
  const { data, isLoading, isError } = useGetEvents();

  if (isError) {
    return <p>SOMETHING WENT WRONG</p>;
  }

  if (isLoading) {
    return <AiOutlineLoading3Quarters className="animate-spin size-10" />;
  }

  return (
    <>
      <div className="flex fixed items-center space-x-4 top-0 py-8 w-full px-24 backdrop-blur-lg bg-card-bg/70">
        <GoBack />
        <h3 className="flex-1 font-mono text-left w-full">RECENT EVENTS</h3>
        <Link href="/events/new">
          <div className="cursor-pointer group flex space-x-2 transition-all items-center text-sm rounded-full  px-5 py-2 text-secondary">
            <span>Add Event</span>
            <FaArrowRight className="group-hover:translate-x-2" />
          </div>
        </Link>
      </div>
      {data?.length === 0 && (
        <div className="grid pt-8 place-items-center min-h-full flex-1">
          <div className="flex flex-col space-y-2 items-center">
            <TfiLayoutAccordionList className="size-8 text-theme-gray" />
            <p className="text-theme-gray">No Events</p>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-4 pt-8 w-full items-center">
        {data?.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </>
  );
};
