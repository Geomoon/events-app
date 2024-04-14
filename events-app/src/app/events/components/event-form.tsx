"use client";

import { DatePickerDemo } from "@/app/components/date-picker";
import { CreateEvent } from "@/models";
import { FaCircleCheck } from "react-icons/fa6";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { EventKeys, useCreateEvent } from "@/services/events";
import { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  name: z.string({ required_error: "Required", coerce: true }).min(1),
  date: z.date(),
  maxCapacity: z.number(),
  isActive: z.boolean(),
});

type Schema = z.infer<typeof schema>;

export const EventForm = () => {
  const { mutate: createEvent } = useCreateEvent();

  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      isActive: true,
    },
  });

  const onSuccess = (data: any) => console.log(data);
  const onError = (data: any) => console.error(data);

  const showSucess = useCallback(() => {
    toast("Event created!", { type: "success", theme: "dark" });
  }, []);

  const showError = useCallback(() => {
    toast("Something went wrong!", { type: "error", theme: "dark" });
  }, []);

  const handleSuccess = useCallback(
    (data: CreateEvent) => {
      createEvent(data, {
        onSuccess: () => {
          showSucess();
          router.replace("/events");
          queryClient.invalidateQueries({ queryKey: EventKeys.todo() });
        },
        onError: () => showError(),
      });
    },
    [createEvent, queryClient, router, showError, showSucess]
  );

  return (
    <form className="flex flex-col w-full space-y-6 py-16 rounded-lg ">
      <div className="min-w-full">
        <textarea
          placeholder="Event name"
          className="resize-none min-w-96 text-secondary font-bold text-lg px-5 py-3 outline-none rounded-md bg-card-bg border border-theme-bg focus:border-primary"
          {...register("name")}
        />
        {errors.name && <p className="text-red-400 text-sm">Required</p>}
      </div>
      <div className="flex flex-1 space-y-6 flex-col bg-theme-bg rounded-lg py-8 px-6">
        <div>
          <DatePickerDemo
            className="min-w-full"
            onDateSelected={(date) => setValue("date", date)}
          />
          {errors.date && <p className="text-red-400 pt-1 text-sm">Required</p>}
        </div>

        <div>
          <input
            type="number"
            className=" min-w-full bg-card-bg px-5 py-3 rounded-md outline-none focus:border-primary border border-transparent"
            placeholder="Capacity"
            min={0}
            {...register("maxCapacity", { valueAsNumber: true })}
          />
          {errors.maxCapacity && (
            <p className="text-red-400 pt-1 text-sm">Required</p>
          )}
        </div>

        <div
          className="flex flex-shrink cursor-pointer font-medium space-x-4 justify-center items-center rounded-full bg-secondary hover:bg-primary px-5 py-2 text-card-bg group transition-all"
          onClick={handleSubmit(handleSuccess, onError)}
        >
          <span>SAVE</span>
          <FaCircleCheck className="size-4 group-hover:translate-x-2 duration-500" />
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};
