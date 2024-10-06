import { Category } from 'src/categories/entities/category.entity';
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
export class Menuitems {
  @PrimaryGeneratedColumn({ type: 'int' })
  MI_id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'MI_category' })
  MI_category: number;

  @Column({ type: 'varchar' })
  MI_name: string;

  @Column({ type: 'varchar' })
  MI_description: string;

  @Column({ type: 'varchar' })
  MI_color: string;

  @Column({ type: 'varchar' })
  MI_price: string;

  @CreateDateColumn({ type: 'datetime' })
  MI_createdat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'MI_createdBy' })
  MI_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  MI_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'MI_modifiedBy' })
  MI_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  MI_activestatus: boolean;
}
