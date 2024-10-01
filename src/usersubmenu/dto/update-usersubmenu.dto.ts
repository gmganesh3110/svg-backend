import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersubmenuDto } from './create-usersubmenu.dto';

export class UpdateUsersubmenuDto extends PartialType(CreateUsersubmenuDto) {}
