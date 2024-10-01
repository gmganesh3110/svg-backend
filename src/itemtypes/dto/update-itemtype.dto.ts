import { PartialType } from '@nestjs/mapped-types';
import { CreateItemtypeDto } from './create-itemtype.dto';

export class UpdateItemtypeDto extends PartialType(CreateItemtypeDto) {}
