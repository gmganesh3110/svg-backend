import { PartialType } from '@nestjs/mapped-types';
import { CreateUserrolepermissionDto } from './create-userrolepermission.dto';

export class UpdateUserrolepermissionDto extends PartialType(CreateUserrolepermissionDto) {}
