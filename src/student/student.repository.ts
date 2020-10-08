import { EntityRepository, Repository } from "typeorm";
import { Student } from './student.entity';
import { StudentDto } from './dto/student.dto';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(studentDto: StudentDto): Promise<Student> {
    const { nome, data_nascimento, cpf, nota } = studentDto;

    const student = new Student();

    student.nome = nome;
    student.data_nascimento = data_nascimento;
    student.cpf = cpf;
    student.nota = nota;

    await student.save();

    return student;
  };

  async updateStudent(id: number, studentDto: StudentDto): Promise<Student> {
    return await this.save({ ...studentDto, id: Number(id) })
  };
  
};
