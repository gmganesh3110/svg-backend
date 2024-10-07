import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Orderstatus {
  @PrimaryGeneratedColumn({ type: 'int' })
  OS_id: number;

  @Column({ type: 'varchar', length: 100 })
  OS_name: string;

  @Column({ type: 'text', nullable: true })
  OS_description: string;

  @CreateDateColumn({ type: 'datetime' })
  OS_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OS_createdby' })
  OS_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  OS_modifiedat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OS_modifiedby' })
  OS_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  OS_activestatus: boolean;
}
