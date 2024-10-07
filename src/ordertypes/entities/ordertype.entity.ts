import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Ordertype {
  @PrimaryGeneratedColumn({ type: 'int' })
  OT_id: number;

  @Column({ type: 'varchar', length: 100 })
  OT_name: string;

  @Column({ type: 'text', nullable: true })
  OT_description: string;

  @CreateDateColumn({ type: 'datetime' })
  OT_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OT_createdby' })
  OT_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  OT_modifiedat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OT_modifiedby' })
  OT_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  OT_activestatus: boolean;
}
