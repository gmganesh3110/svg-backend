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
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 15,
  })
  mobile: string;

  @Column({ type: 'int', default: null }) 
  userRole: number;

  @Column({type:'varchar',default:'Pending'})
  status:string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'int', default: null })
  createdBy: number;

  @UpdateDateColumn({ type: 'datetime' })
  modifiedAt: Date;

  @Column({ type: 'int', default: null })
  modifiedBy: number;

  @Column({ type: 'boolean', default: true })
  activeStatus: boolean;
}
