import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [StudentModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
