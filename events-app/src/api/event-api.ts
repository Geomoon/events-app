import { CreateEvent, GetEvent } from "@/models";
import api from "./api";
import { IdModel } from "@/models/shared";

export const EventApi = {
  getAll: async () => {
    const response = await api.get<GetEvent[]>("/events");
    return response.data;
  },
  create: async (data: CreateEvent) => {
    const response = await api.post<IdModel>("/events", data);
    return response.data;
  },
};
