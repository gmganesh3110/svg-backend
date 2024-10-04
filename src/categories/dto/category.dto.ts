export class CreateCategoryDto {
  CG_name: string;
  CG_description: string;
  CG_createdby: number;
}
export class UpdateCategoryDto {
  CG_name: string;
  CG_description: string;
  CG_modifiedby: number;
}
export class getCategoriesDto{
  start:number;
  limit:number;
  CG_name:string;
}