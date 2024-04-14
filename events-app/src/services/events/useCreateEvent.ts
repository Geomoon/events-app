import { EventApi } from "@/api";
import { CreateEvent } from "@/models";
import { useMutation } from "@tanstack/react-query";

export const useCreateEvent = () => {
  const handler = async (data: CreateEvent) => {
    return await EventApi.create(data);
  };

  return useMutation({
    mutationFn: handler,
  });
};
