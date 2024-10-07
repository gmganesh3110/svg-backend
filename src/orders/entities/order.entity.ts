import { Floor } from 'src/floors/entities/floor.entity';
import { Orderstatus } from 'src/orderstatus/entities/orderstatus.entity';
import { Ordertype } from 'src/ordertypes/entities/ordertype.entity';
import { Tables } from 'src/tables/entities/table.entity';
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
export class Order {
  @PrimaryGeneratedColumn({ type: 'int' })
  OD_id: number;

  @ManyToOne(() => Floor)
  @JoinColumn({ name: 'OD_floorid' })
  OD_floorid: number;

  @ManyToOne(() => Tables)
  @JoinColumn({ name: 'OD_tableid' })
  OD_tableid: number;

  @CreateDateColumn({ type: 'datetime' })
  OD_date: Date;

  @Column({ type: 'int' })
  OD_duration: number;

  @Column({ type: 'int' })
  OD_amount: number;

  @ManyToOne(() => Orderstatus)
  @JoinColumn({ name: 'OD_status' })
  OD_status: number;

  @ManyToOne(() => Ordertype)
  @JoinColumn({ name: 'OD_type' })
  OD_type: number;

  @CreateDateColumn({ type: 'datetime' })
  OD_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OD_createdby' })
  OD_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  OD_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'OD_modifiedby' })
  OD_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  OD_activestatus: boolean;
}
