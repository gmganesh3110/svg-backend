import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateCategoryDto,
  getCategoriesDto,
  UpdateCategoryDto,
} from './dto/category.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(private entityManager: EntityManager) {}
  public async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<any> {
    try {
      const { CG_name, CG_createdby, CG_description,CG_color } = createCategoryDto;
      const query = 'call createcategory(?,?,?,?)';
      const params: any[] = [CG_name, CG_description,CG_color, CG_createdby];
      await this.entityManager.query(query, params);
      return {
        message: 'Category Added Successfully',
      };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllCategories(
    getCategoriesDto: getCategoriesDto,
  ): Promise<any> {
    try {
      const { CG_name, start, limit } = getCategoriesDto;
      const query = `call getallcategories(?,?,?) `;
      const params = [CG_name, start, limit];
      return this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getCategory(id: number): Promise<any> {
    try {
      const query = `call getcategory(?) `;
      const params = [id];
      return this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async updateCategory(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<any> {
    try {
      const { CG_name, CG_description, CG_modifiedby,CG_color } = updateCategoryDto;
      const query = 'call updatecategory(?,?,?,?,?)';
      const params: any[] = [id, CG_name, CG_description,CG_color, CG_modifiedby];
      return await this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
