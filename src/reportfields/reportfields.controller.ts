import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportfieldsService } from './reportfields.service';
import { CreateReportfieldDto } from './dto/create-reportfield.dto';
import { UpdateReportfieldDto } from './dto/update-reportfield.dto';

@Controller('reportfields')
export class ReportfieldsController {
  constructor(private readonly reportfieldsService: ReportfieldsService) {}

  @Post()
  create(@Body() createReportfieldDto: CreateReportfieldDto) {
    return this.reportfieldsService.create(createReportfieldDto);
  }

  @Get()
  findAll() {
    return this.reportfieldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportfieldsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportfieldDto: UpdateReportfieldDto) {
    return this.reportfieldsService.update(+id, updateReportfieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportfieldsService.remove(+id);
  }
}
