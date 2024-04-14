import { Injectable } from '@nestjs/common';
import { EventRepository } from './event.repository';
import { CreateEventDTO } from './dto/create-event.dto';
import { IdDTO } from '../shared/id.dto';

@Injectable()
export class EventService {
  constructor(private readonly repository: EventRepository) {}

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
