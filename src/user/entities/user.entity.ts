import { Userrole } from 'src/userrole/entities/userrole.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@Index(['U_username'], { unique: true })
@Index(['U_email'], { unique: true })
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

  @Column({ type: 'varchar', default: 'Pending' })
  U_status: string;

  @ManyToOne(() => Userrole)
  @JoinColumn({ name: 'U_userrole' })
  U_userrole: number;

  @CreateDateColumn({ type: 'datetime' })
  U_createdat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'U_createdby' })
  U_createdby: number;

  @UpdateDateColumn({ type: 'datetime' })
  U_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'U_modifiedby' })
  U_modifiedby: number;

  @Column({ type: 'boolean', default: true })
  U_activestatus: boolean;
}
