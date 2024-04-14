interface Event {
  id?: string;
  name?: string;
  date?: Date;
  maxCapacity?: number;
  isActive?: boolean;
}

export type GetEvent = Event;

export type CreateEvent = Omit<Event, "id">;
