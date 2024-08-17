import { Column, Entity } from 'typeorm';

@Entity({ name: 'events' })
export class Event {
  @Column('uuid', {
    name: 'even_id',
    primary: true,
    default: () => 'gen_random_uuid()',
  })
  id?: string;

  @Column('varchar', { name: 'even_name' })
  name?: string;

  @Column('timestamp', { name: 'even_date' })
  date?: Date;

  @Column('integer', { name: 'even_max_capacity' })
  maxCapacity?: number;

  @Column('boolean', { name: 'even_is_active', default: true })
  isActive?: boolean;
}
