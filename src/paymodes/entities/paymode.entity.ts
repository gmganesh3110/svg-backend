import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Paymode {
  @PrimaryGeneratedColumn({ type: 'int' })
  PM_id: number;

  @Column({ type: 'varchar' })
  PM_paymode: string;

  @Column({ type: 'varchar' })
  PM_description: string;

  @CreateDateColumn({ type: 'datetime' })
  PM_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'PM_createdby' })
  PM_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  PM_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'PM_modifiedby' })
  PM_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  PM_activestatus: boolean;
}
