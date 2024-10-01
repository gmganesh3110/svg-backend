import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Usermenu {
  @PrimaryGeneratedColumn()
  UM_id: number;

  @Column({ type: 'varchar' })
  UM_name: string;

  @Column({ type: 'varchar' })
  UM_link: string;

  @Column({ type: 'text' })
  UM_icon: string;

  @Column({})
  UM_sequence: number;

  @Column({})
  UM_issubmenu: boolean;

  @CreateDateColumn({ type: 'datetime' })
  UM_createdat: Date;

  @Column({ type: 'int', default: null })
  UM_createdby: number;

  @UpdateDateColumn({ type: 'datetime' })
  UM_modifiedat: Date;

  @Column({ type: 'int', default: null })
  UM_modifiedby: number;

  @Column({ type: 'boolean', default: true })
  UM_activestatus: boolean;
}
