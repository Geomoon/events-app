import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventFirestoreRepository } from './event.firestore';

@Module({
  controllers: [EventController],
  providers: [EventService, EventFirestoreRepository],
})
export class EventModule {}
