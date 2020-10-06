CREATE TABLE endereco(
    id serial primary key,
    rua varchar(60) not null,
    numero varchar(10),
    complemento varchar(30),
    bairro varchar(60) not null,
    aluno_id int not null
);

CREATE TABLE aluno(
    id serial primary key,
    nome varchar(60) not null,
    data_nascimento date not null,
    cpf varchar(14) not null,
    nota decimal(3, 1) not null
);

