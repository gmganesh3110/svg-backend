import { Injectable } from '@nestjs/common';
import { CreateReportfieldDto } from './dto/create-reportfield.dto';
import { UpdateReportfieldDto } from './dto/update-reportfield.dto';

@Injectable()
export class ReportfieldsService {
  create(createReportfieldDto: CreateReportfieldDto) {
    return 'This action adds a new reportfield';
  }

  findAll() {
    return `This action returns all reportfields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportfield`;
  }

  update(id: number, updateReportfieldDto: UpdateReportfieldDto) {
    return `This action updates a #${id} reportfield`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportfield`;
  }
}
