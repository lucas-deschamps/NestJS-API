import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nome: string;

  @Column({ type: "date" })
  data_nascimento: string;

  @Column({ type: "varchar" })
  cpf: string;

  @Column({ type: "decimal" })
  nota: number;
};
