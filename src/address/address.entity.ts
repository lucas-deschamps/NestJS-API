import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "endereco" })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  rua: string;

  @Column({ type: "varchar" })
  numero: string;

  @Column({ type: "varchar" })
  complemento: string;

  @Column({ type: "varchar" })
  bairro: string;

  @Column({ type: "int" })
  aluno_id: number;
};
