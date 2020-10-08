import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(StudentRepository) private studentRepository: StudentRepository) {}

  async getStudentById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne(id);

    if (!student) {
      throw new NotFoundException(`O aluno com o ID '${id}' não foi encontrado.`);
    };

    return student;
  };

  async createStudent(studentDto: StudentDto): Promise<Student> {
    return this.studentRepository.createStudent(studentDto);
  };

  async updateStudent(id: number, studentDto: StudentDto): Promise<Student> {
    return this.studentRepository.updateStudent(id, studentDto);
  };

};
