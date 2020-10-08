import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(StudentRepository) private studentRepository: StudentRepository) {}

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  };

  async getStudentByCriteria(grade: number, criteria: string): Promise<Student[]> {
    const students: Student[] = await this.getAllStudents();

    if (criteria === ">") {
      return students.filter(student => student.nota > grade);
    };

    if (criteria === "<") {
      return students.filter(student => student.nota < grade);
    };
  };

  async getUpperEndStudents(): Promise<Student[]> {
    let total = 0;
    const upperEndStudents: Student[] = [];

    const students: Student[] = await this.getAllStudents();

    for (const student of students) {
      total += Number(student.nota);
    };

    const averageGrade = total / students.length;

    for (const student of students) {
      if (student.nota > averageGrade) {
        upperEndStudents.push(student);
      };
    };

    return upperEndStudents;
  };

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

  async deleteStudent(id: number): Promise<void> {
    this.studentRepository.deleteStudent(id);
  };
};
