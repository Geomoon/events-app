import { Column, Entity } from 'typeorm';

@Entity('events')
export class Event {
  @Column('uuid', { name: 'id', primary: true })
  id?: string;

  @Column('string', { name: 'name' })
  name?: string;

  @Column('timestamp', { name: 'date' })
  date?: Date;

  @Column('number', { name: 'maxCapacity' })
  maxCapacity?: number;

  @Column('boolean', { name: 'isActive', default: true })
  isActive?: boolean;
}
