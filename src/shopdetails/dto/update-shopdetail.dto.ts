import { PartialType } from '@nestjs/mapped-types';
import { CreateShopdetailDto } from './create-shopdetail.dto';

export class UpdateShopdetailDto extends PartialType(CreateShopdetailDto) {}
