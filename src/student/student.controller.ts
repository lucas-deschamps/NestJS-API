import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Controller('/aluno')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  };

  @Post()
  createStudent(@Body() studentDto: StudentDto): Promise<Student> {
    return this.studentService.createStudent(studentDto);
  };

  @Put('/:id')
  updateStudent(@Param('id', ParseIntPipe) id: number, @Body() studentDto: StudentDto): Promise<Student> {
    return this.studentService.updateStudent(id, studentDto);
  };

  @Delete('/:id')
  deleteStudent(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.studentService.deleteStudent(id);
  };
};
