export const EventKeys = {
  todo: () => ["events"],
  byId: (id: string) => [...EventKeys.todo(), id],
};
