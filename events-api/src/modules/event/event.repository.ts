import { EntityRepository } from '../shared/entity.repository';
import { Event } from './event.entity';

import { v4 } from 'uuid';

// @Injectable()
export class EventRepository implements EntityRepository<Event, string> {
  private data: Event[] = [];

  async getAll(): Promise<Event[]> {
    return this.data;
  }

  async getById(id: string): Promise<Event> {
    return this.data.find((e) => e.id === id);
  }

  async save(entity: Event): Promise<string> {
    console.log(entity);

    const id = v4();
    entity.id = id;
    this.data.push(entity);

    return id;
  }

  async update(id: string, entity: Partial<Event>): Promise<string> {
    let item = this.data.find((e) => e.id === id);
    item = { ...entity };
    return item.id;
  }

  async delete(id: string): Promise<void> {
    const item = await this.getById(id);
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }
}
