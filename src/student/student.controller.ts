import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Controller('/aluno')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  };

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/media')
  getUpperEndStudents(): Promise<Student[]> {
    return this.studentService.getUpperEndStudents();
  };

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  };

  @Get('/:aluno_id/endereco')
  getStudentAddress(@Param('aluno_id', ParseIntPipe) studentId: number) {
    return this.studentService.getStudentAddress(studentId);
  };

  @UseInterceptors(ClassSerializerInterceptor)
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
  deleteStudent(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.studentService.deleteStudent(id);
  };
};
