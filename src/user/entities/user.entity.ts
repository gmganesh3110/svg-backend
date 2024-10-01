import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity()
@Index(['username'], { unique: true }) 
@Index(['email'], { unique: true }) 
@Index(['createdBy'])
@Index(['modifiedBy'])
export class User {
  @PrimaryGeneratedColumn()
  U_id: number;

  @Column({
    type: 'varchar',
    length: 30,
  })
  U_username: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  U_name: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  U_email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  U_password: string;

  @Column({
    type: 'varchar',
    length: 15,
  })
  U_mobile: string;

  @Column({type:'varchar',default:'Pending'})
  U_status:string;

  @CreateDateColumn({ type: 'datetime' })
  U_createdAt: Date;

  @Column({ type: 'int', default: null })
  U_createdBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  U_modifiedAt: Date;

  @Column({ type: 'int', default: null })
  U_modifiedBy: number;

  @Column({ type: 'boolean', default: true })
  U_activeStatus: boolean;
}
