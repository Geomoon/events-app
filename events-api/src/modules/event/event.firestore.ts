import { Injectable } from '@nestjs/common';
import { EntityRepository } from '../shared/entity.repository';
import { Event } from './event.entity';

import { v4 } from 'uuid';
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class EventFirestoreRepository
  implements EntityRepository<Event, string>
{
  private data: Event[] = [];
  private readonly store: Firestore;

  constructor() {
    this.store = new Firestore({
      projectId: 'red-context-430321-u5',
      databaseId: 'mongo-ista',
    });
  }

  async getAll(): Promise<Event[]> {
    const collection = this.store.collection('events');
    const events = await collection.orderBy('name').limitToLast(2).get();
    const data = events.docs.map((e): Event => {
      const item = e.data();
      const milliseconds =
        item.date._seconds * 1000 + item.date._nanoseconds / 1000000;

      return {
        id: item.id,
        isActive: item.isActive,
        name: item.name,
        maxCapacity: item.maxCapacity,
        date: new Date(milliseconds),
      };
    });

    return data;
  }

  async getById(id: string): Promise<Event> {
    // const collection = this.store.collection('events');
    // await collection.;
    return this.data.find((e) => e.id === id);
  }

  async save(entity: Event): Promise<string> {
    const id = v4();
    entity.id = id;

    const collection = this.store.collection('events');
    await collection.doc().set(entity);

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
