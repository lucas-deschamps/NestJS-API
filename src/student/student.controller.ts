import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Controller('/aluno')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  createStudent(@Body() studentDto: StudentDto): Promise<Student> {
    return this.studentService.createStudent(studentDto);
  };

};
