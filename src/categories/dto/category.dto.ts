export class CreateCategoryDto {
  CG_name: string;
  CG_description: string;
  CG_createdby: number;
  CG_color:string;
}
export class UpdateCategoryDto {
  CG_name: string;
  CG_description: string;
  CG_modifiedby: number;
  CG_color:string;
}
export class getCategoriesDto{
  start:number;
  limit:number;
  CG_name:string;
}