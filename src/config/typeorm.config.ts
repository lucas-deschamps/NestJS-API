import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres', // estou usando outra senha na minha API localmente, mas subindo a padrão do postgres
  database: 'bancodedados',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
