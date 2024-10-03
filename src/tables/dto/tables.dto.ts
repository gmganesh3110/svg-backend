export class CreateTableDto {
  T_floorid: number;
  T_tablename: string;
  T_description: string;
  T_seats: number;
  T_createdby: number;
}

export class GetTablesDto {
  T_floorid: number;
  T_tablename: string;
  start: number;
  limit: number;
}

export class UpdateTableDto {
  T_tablename: string;
  T_description: string;
  T_seats: number;
  T_modifiedby: number;
}
