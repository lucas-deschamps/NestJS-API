import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';
import { AddressRepository } from '../address/address.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudentRepository, AddressRepository])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
