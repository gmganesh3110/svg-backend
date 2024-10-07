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
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class Orderpayments {
  @PrimaryGeneratedColumn({ type: 'int' })
  OP_id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'OP_orderid' })
  OP_orderid: Order;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  OP_paidamount: number;

  @Column({ type: 'varchar', length: 50 })
  OP_paymode: string;

  @Column({ type: 'datetime' })
  OP_paydate: Date;

  @Column({ type: 'varchar', length: 50 })
  OP_paymentstatus: string;

  @CreateDateColumn({ type: 'datetime' })
  OP_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OP_createdby' })
  OP_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  OP_modifiedat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OP_modifiedby' })
  OP_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  OP_activestatus: boolean;
}
