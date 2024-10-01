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
export class Userrole {
  @PrimaryGeneratedColumn({ type: 'int' })
  UR_id: number;

  @Column({ type: 'varchar' })
  UR_role: string;

  @CreateDateColumn({ type: 'datetime' })
  UR_createdAt: Date;

  @ManyToOne(() => User,{nullable:true})
  @JoinColumn({ name: 'UR_createdby' })
  UR_createdby: User|null;

  @UpdateDateColumn({ type: 'datetime' })
  UR_modifiedAt: Date;

  @ManyToOne(() => User,{nullable:true})
  @JoinColumn({ name: 'UR_modifiedby', })
  UR_modifiedby: User|null;

  @Column({ type: 'boolean', default: true })
  UR_activeStatus: boolean;
}
