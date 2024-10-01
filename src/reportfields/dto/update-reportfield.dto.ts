import { PartialType } from '@nestjs/mapped-types';
import { CreateReportfieldDto } from './create-reportfield.dto';

export class UpdateReportfieldDto extends PartialType(CreateReportfieldDto) {}
