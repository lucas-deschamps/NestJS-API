import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "aluno" })
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  nome: string;

  @Column({ type: "date", nullable: false })
  data_nascimento: string;

  @Column({ type: "varchar", nullable: false })
  cpf: string;

  @Column({ type: "decimal", precision: 3, scale: 1 })
  nota: number;
};
