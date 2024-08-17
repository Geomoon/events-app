import { DataSource } from 'typeorm';

export const eventProviders = [
  {
    provide: 'EVENT_REPOSITORY',
    useFactory: (d: DataSource) => d.getRepository(Event),
    inject: ['DATA_SOURCE'],
  },
];
