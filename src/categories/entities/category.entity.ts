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
export class Category {
  @PrimaryGeneratedColumn({ type: 'int' })
  CG_id: number;

  @Column({ type: 'varchar' })
  CG_name: string;

  @Column({ type: 'varchar' })
  CG_description: string;

  @Column({ type: 'varchar' })
  CG_color: string;

  @CreateDateColumn({ type: 'datetime' })
  CG_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'CG_createdby' })
  CG_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  CG_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'CG_modifiedby' })
  CG_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  CG_activestatus: boolean;
}
