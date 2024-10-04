import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, getCategoriesDto, UpdateCategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  public async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  getAllCategories(@Body()getCategoriesDto:getCategoriesDto ) {
    return this.categoriesService.getAllCategories(getCategoriesDto);
  }

  @Get(':id')
  getCategory(@Param('id') id: number) {
    return this.categoriesService.getCategory(id);
  }

  @Patch(':id')
  updateCategory(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.updateCategory(id, updateCategoryDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoriesService.remove(+id);
  // }
}
