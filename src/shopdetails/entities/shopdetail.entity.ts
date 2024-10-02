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
export class Shopdetail {
  @PrimaryGeneratedColumn({ type: 'int' })
  SD_id: number;

  @Column({ type: 'varchar' })
  SD_name: string;

  @Column({ type: 'varchar' })
  SD_profileimage: string;

  @Column({ type: 'varchar' })
  SD_banner: string;

  @Column({ type: 'varchar' })
  SD_description: string;

  @Column({ type: 'varchar' })
  SD_address: string;

  @Column({ type: 'varchar' })
  SD_city: string;

  @Column({ type: 'varchar' })
  SD_state: string;

  @Column({ type: 'varchar' })
  SD_zipcode: string;

  @Column({ type: 'varchar' })
  SD_shopemail: string;

  @Column({ type: 'varchar' })
  SD_mobile: string;

  @CreateDateColumn({ type: 'datetime' })
  SD_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'SD_createdby' })
  SD_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  SD_modifiedat: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'SD_modifiedby' })
  SD_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  SD_activestatus: boolean;
}
