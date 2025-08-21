import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { AudioController } from './audio.controller';

@Module({
  controllers: [ChatController, AudioController],
})
export class AppModule {}