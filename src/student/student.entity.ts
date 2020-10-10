import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Transform } from 'class-transformer';

@Entity({ name: "aluno" })
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  nome: string;

  @Column({ type: "date", nullable: false })
  data_nascimento: string;

  @Column({ type: "varchar", nullable: false, unique: true })
  @Transform(value => value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"))
  cpf: string;

  @Column({ type: "decimal", precision: 3, scale: 1 })
  nota: number;
};
