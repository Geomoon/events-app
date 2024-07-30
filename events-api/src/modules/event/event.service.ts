import { Injectable } from '@nestjs/common';
import { CreateEventDTO } from './dto/create-event.dto';
import { IdDTO } from '../shared/id.dto';
import { EventFirestoreRepository } from './event.firestore';

@Injectable()
export class EventService {
  constructor(private readonly repository: EventFirestoreRepository) {}

  async getAll() {
    return await this.repository.getAll();
  }

  async create(data: CreateEventDTO): Promise<IdDTO> {
    const id = await this.repository.save(data);
    return { id };
  }

  delete(id: string) {
    this.repository.delete(id);
  }
}
