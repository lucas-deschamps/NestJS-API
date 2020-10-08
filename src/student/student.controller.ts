import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Controller('/aluno')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  };

  @Get('/media')
  getUpperEndStudents(): Promise<Student[]> {
    return this.studentService.getUpperEndStudents();
  };

  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  };

  @Get('/:nota/criterio/:criterio')
  getStudentByCriteria(@Param('nota', ParseIntPipe) grade: number, @Param('criterio') criteria: string): Promise<Student[]> {
    return this.studentService.getStudentByCriteria(grade, criteria);
  };

  @Post()
  createStudent(@Body() studentDto: StudentDto): Promise<Student> {
    return this.studentService.createStudent(studentDto);
  };

  @Put('/:id')
  updateStudent(@Param('id', ParseIntPipe) id: number, @Body() studentDto: StudentDto): Promise<Student> {
    return this.studentService.updateStudent(id, studentDto);
  };

  @Delete('/:id') // extra
  deleteStudent(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.studentService.deleteStudent(id);
  };
};
