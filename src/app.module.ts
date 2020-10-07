import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), StudentModule, AddressModule],
})
export class AppModule {}
