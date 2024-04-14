import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './dto/create-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly service: EventService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Post()
  async create(@Body() data: CreateEventDTO) {
    console.log(data);

    return await this.service.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
