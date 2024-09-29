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
@Index(['userRole'])
export class User {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column({
    type: 'varchar',
    length: 30,
  })
  u_username: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  u_name: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  u_email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  u_password: string;

  @Column({
    type: 'varchar',
    length: 15,
  })
  u_mobile: string;

  @Column({type:'varchar',default:'Pending'})
  u_status:string;

  @CreateDateColumn({ type: 'datetime' })
  u_createdAt: Date;

  @Column({ type: 'int', default: null })
  u_createdBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  u_modifiedAt: Date;

  @Column({ type: 'int', default: null })
  u_modifiedBy: number;

  @Column({ type: 'boolean', default: true })
  u_activeStatus: boolean;
}
