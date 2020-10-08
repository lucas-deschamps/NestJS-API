import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressRepository } from './address.repository';
import { AddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(AddressRepository) private addressRepository: AddressRepository) {}

  async createAddress(addressDto: AddressDto): Promise<Address> {
    return this.addressRepository.createAddress(addressDto);
  };
};
