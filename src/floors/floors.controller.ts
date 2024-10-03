import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FloorsService } from './floors.service';
import { CreateFloorDto, GetFloorsDto, UpdateFloorDto } from './dto/floor.dto';

@Controller('floors')
export class FloorsController {
  constructor(private readonly floorsService: FloorsService) {}

  @Post()
  public async createFloor(@Body() createFloorDto: CreateFloorDto) {
    return this.floorsService.createFloor(createFloorDto);
  }
  @Get()
  public async getallFloors(@Body() getFloorsDto: GetFloorsDto): Promise<any> {
    return this.floorsService.getallFloors(getFloorsDto);
  }
  @Get(':id')
  public async getFloor(@Param('id') id: number): Promise<any> {
    return this.floorsService.getFloor(id);
  }
  @Patch(':id')
  public async updateFloor(
    @Param('id') id: number,
    @Body() updateFloorDto: UpdateFloorDto,
  ): Promise<any> {
    return this.floorsService.updateFloor(id,updateFloorDto);
  }
}
