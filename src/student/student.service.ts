import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';
import { AddressRepository } from '../address/address.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository) private studentRepository: StudentRepository,
    @InjectRepository(AddressRepository) private addressRepository: AddressRepository
  ) {}

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

  async getStudentAddress(studentId: number) {
    const addresses = await this.addressRepository.find();

    return {
      total: addresses.filter(address => address.aluno_id === studentId).length,
      enderecos: addresses.filter(address => address.aluno_id === studentId).map(address => {
        return {
          endereco: `${address.rua}, ${address.numero} - ${address.complemento}`,
          bairro: `${address.bairro}`,
        }
      })
    };
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
