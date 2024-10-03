export class CreateFloorDto {
  F_floorname: string;
  F_description: string;
  F_createdby: number;
}
export class GetFloorsDto{
  F_floorname:string;
  start:number;
  limit:number;
}
export class UpdateFloorDto{
  F_floorname: string;
  F_description: string;
  F_modifiedby: number;
}