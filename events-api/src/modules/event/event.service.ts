import { Injectable } from '@nestjs/common';
import { CreateEventDTO } from './dto/create-event.dto';
import { IdDTO } from '../shared/id.dto';
import { Event } from './event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  async getAll() {
    return await this.repository.find();
  }

  async create(data: CreateEventDTO): Promise<IdDTO> {
    const saved = await this.repository.save({ name: data.name });
    return { id: saved.id };
  }

  delete(id: string) {
    this.repository.delete(id);
  }
}
