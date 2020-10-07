import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(StudentRepository) private studentRepository: StudentRepository) {}

  async createStudent(studentDto: StudentDto): Promise<Student> {
    return this.studentRepository.createStudent(studentDto);
  };

};
