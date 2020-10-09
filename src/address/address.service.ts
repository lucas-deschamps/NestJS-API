import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressRepository } from './address.repository';
import { AddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(AddressRepository) private addressRepository: AddressRepository) {}

  async getAddressByNeighborhood(neighborhood: string) {
    const addresses = await this.addressRepository.find();

    return addresses.filter(address => address.bairro.toLowerCase() === neighborhood.toLowerCase());
  };

  async getAllAddresses(): Promise<Address[]> {
    return await this.addressRepository.find();
  };

  async createAddress(addressDto: AddressDto): Promise<Address> {
    return this.addressRepository.createAddress(addressDto);
  };
};
