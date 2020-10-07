#!/bin/bash

bd="desafio"

echo -e "Criando banco de dados \"$bd\"...\n"

createdb $bd

psql -d $bd < ./api.sql || ./src/config/api.sql

echo -e "\n[Banco de dados \"$bd\" configurado.]"
