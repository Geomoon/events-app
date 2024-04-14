import { GoBack } from "@/app/components/go-back";
import { EventForm } from "../components/event-form";

const Page = () => {
  return (
    <>
      <div className="flex fixed space-x-4 items-center top-0 py-10 w-full px-24 backdrop-blur-lg bg-card-bg/70">
        <GoBack />
        <h3 className="flex-1 font-mono text-left w-full">CREATE EVENT</h3>
      </div>
      <div className="pt-8">
        <EventForm />
      </div>
    </>
  );
};

export default Page;
