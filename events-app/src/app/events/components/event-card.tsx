import { GetEvent } from "@/models";
import Link from "next/link";
import { FC } from "react";
import { BsFillPeopleFill, BsFillCalendarEventFill } from "react-icons/bs";
import { IoCloseCircle, IoTicket } from "react-icons/io5";

type props = {
  event: GetEvent;
};

export const EventCard: FC<props> = ({ event }) => {
  return (
    <div
      key={event.id}
      className="max-w-3xl sm:min-w-full flex  flex-col py-8 px-10 border-2 rounded-lg border-theme-gray space-y-2"
    >
      <div className="flex space-x-2 items-center">
        <h3 className="text-secondary font-bold text-2xl flex-1">
          {event.name}
        </h3>
        <button>
          <IoCloseCircle className="size-6 text-gray-200" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <BsFillPeopleFill />
        <p className="font-mono">{event.maxCapacity}</p>
        <BsFillCalendarEventFill />
        <p className="font-mono">{event?.date?.toString()}</p>
      </div>
      <div className="flex">
        {event.isActive ? (
          <Link href="">
            <div className="flex flex-shrink space-x-4 items-center rounded-full bg-secondary px-5 py-2 text-card-bg group transition-all">
              <span>Buy Ticket</span>
              <IoTicket className="size-6 group-hover:animate-bounce" />
            </div>
          </Link>
        ) : (
          <div className="items-center rounded-full border border-secondary px-5 py-2 text-secondary">
            <span>Finished</span>
          </div>
        )}
      </div>
    </div>
  );
};
