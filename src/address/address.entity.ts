import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @Column({ type: "int", nullable: false })
  aluno_id: number;

  @ManyToOne(() => Student, { nullable: false })
  @JoinColumn({ name: "aluno_id" })
  aluno: number;
};
