import { EntityRepository, Repository } from "typeorm";
import { Student } from './student.entity';
import { StudentDto } from './dto/student.dto';
import { NotAcceptableException, NotFoundException } from "@nestjs/common";

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(studentDto: StudentDto): Promise<Student> {
    const { nome, data_nascimento, cpf, nota } = studentDto;

    const student = new Student();

    student.nome = nome;
    student.data_nascimento = data_nascimento;
    student.cpf = cpf;
    student.nota = Number(nota);

    if (cpf.length === 14) {
      student.cpf = cpf.replace(/\D+/g, '');
    };

    if (cpf.length === 11 && Boolean(cpf.match(/\D+/))) {
      throw new NotAcceptableException("CPF inválido.");
    };

    if (cpf.length !== 11 && cpf.length !== 14) {
      throw new NotAcceptableException("CPF inválido.");
    };

    await student.save();

    return student;
  };

  async updateStudent(id: number, studentDto: StudentDto): Promise<Student> {
    return await this.save({ ...studentDto, id: Number(id) })
  };

  async deleteStudent(id: number): Promise<void> {
    const result = await this.delete(id);
    try {
      result;
    } catch {
      if (result.affected === 0) {
        throw new NotFoundException(`Aluno com o ID '${id}' não foi encontrado.`);
      };
    };
  };
};
