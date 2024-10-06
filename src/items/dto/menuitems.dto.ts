export class CreateMenuItemDto {
  MI_category: number;
  MI_name: string;
  MI_description: string;
  MI_color: string;
  MI_price:string;
  MI_createdby: number;
}

export class UpdateMenuItemDto {
  MI_category: number;
  MI_name: string;
  MI_description: string;
  MI_color: string;
  MI_price:string;
  MI_modifiedby: number;
}

export class GetMenuItems {
    MI_category:number;
    MI_name:string;
    start:number;
    limit:number;
}
