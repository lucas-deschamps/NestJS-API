import { Controller } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('/aluno')
export class StudentController {
  constructor(private studentService: StudentService) {}
};
