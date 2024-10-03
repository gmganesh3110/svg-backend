import { Floor } from 'src/floors/entities/floor.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tables {
  @PrimaryGeneratedColumn()
  T_id: number;

  @ManyToOne(() => Floor)
  @JoinColumn({ name: 'T_floorid' })
  T_floorid: Floor;

  @Column({ type: 'varchar' })
  T_tablename: string;

  @Column({ type: 'varchar' })
  T_description: string;

  @Column({ type: 'int' })
  T_seats: number;

  @CreateDateColumn({ type: 'datetime' })
  T_createdat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'T_createdBy' })
  T_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  T_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'T_modifiedBy' })
  T_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  T_activestatus: boolean;
}
