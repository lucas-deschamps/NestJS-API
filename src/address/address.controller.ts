import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('/endereco')
export class AddressController {
  constructor(private addressService: AddressService) {}
};
