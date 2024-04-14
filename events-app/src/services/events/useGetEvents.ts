import { EventApi } from "@/api";
import { GetEvent } from "@/models";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { EventKeys } from "./eventsKeys";

export const useGetEvents = (
  options?: UseQueryOptions<
    GetEvent[],
    AxiosError,
    GetEvent[],
    ReturnType<(typeof EventKeys)["todo"]>
  >
) => {
  const getEvents = async () => {
    return await EventApi.getAll();
  };

  return useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
    ...options,
  });
};
