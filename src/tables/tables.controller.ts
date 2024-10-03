import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto, GetTablesDto, UpdateTableDto } from './dto/tables.dto';

@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}
  @Post()
  public async createTable(
    @Body() createTableDto: CreateTableDto,
  ): Promise<any> {
    return this.tablesService.createTable(createTableDto);
  }

  @Get()
  public async getAllTables(@Body() getTablesDto: GetTablesDto): Promise<any> {
    return this.tablesService.getAllTables(getTablesDto);
  }

  @Get(':id')
  public async getSingleTable(@Param('id') id: number): Promise<any> {
    return this.tablesService.getSingleTable(id);
  }

  @Patch(':id')
  public async updateSingleTable(
    @Param('id') id: number,
    @Body() updateTaleDto: UpdateTableDto,
  ): Promise<any> {
    return this.tablesService.updateSingleTable(id,updateTaleDto);
  }
}
