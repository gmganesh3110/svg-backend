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
export class Table {
  @PrimaryGeneratedColumn()
  T_id: number;

  @ManyToOne(() => Floor)
  @JoinColumn({ name: 'T_floorid' })
  T_floorid: Floor;

  @Column({ type: 'varchar' })
  T_floorname: string;

  @Column({ type: 'varchar' })
  T_description: string;

  @CreateDateColumn({ type: 'datetime' })
  T_createdAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'T_createdBy' })
  T_createdBy: User;

  @UpdateDateColumn({ type: 'datetime' })
  T_modifiedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'T_modifiedBy' })
  T_modifiedBy: User;

  @Column({ type: 'boolean', default: true })
  T_activeStatus: boolean;
}
