import { Body, Controller, Get, Post } from '@nestjs/common';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { AddressDto } from './dto/address.dto';

@Controller('/endereco')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAllAddresses(): Promise<Address[]> {
    return this.addressService.getAllAddresses();
  };

  @Post()
  createAddress(@Body() addressDto: AddressDto): Promise<Address> {
    return this.addressService.createAddress(addressDto);
  };
};
