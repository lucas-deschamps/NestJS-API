import { EntityRepository, Repository } from "typeorm";
import { Address } from './address.entity';
import { AddressDto } from './dto/address.dto';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async createAddress(addressDto: AddressDto): Promise<Address> {
    const { rua, numero, complemento, bairro, aluno_id } = addressDto;

    const address = new Address();

    address.rua = rua;
    address.numero = numero;
    address.complemento = complemento;
    address.bairro = bairro;
    address.aluno = aluno_id;

    await address.save();

    return address;
  };

};
