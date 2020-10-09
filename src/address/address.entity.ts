import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from '../student/student.entity';

@Entity({ name: "endereco" })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  rua: string;

  @Column({ type: "varchar", nullable: true })
  numero: string;

  @Column({ type: "varchar", nullable: true })
  complemento: string;

  @Column({ type: "varchar", nullable: false })
  bairro: string;

  @ManyToOne(() => Student, { nullable: false })
  aluno: number;
};
