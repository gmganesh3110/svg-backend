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
import { Menuitems } from 'src/items/entities/item.entity';

@Entity()
export class Orderitems {
  @PrimaryGeneratedColumn({ type: 'int' })
  OI_id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'OI_orderid' })
  OI_orderid: Order;

  @ManyToOne(() => Menuitems)
  @JoinColumn({ name: 'OI_itemid' })
  OI_itemid: Menuitems;

  @Column({ type: 'int' })
  OI_quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  OI_price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  OI_totalamount: number;

  @CreateDateColumn({ type: 'datetime' })
  OI_createdat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OI_createdby' })
  OI_createdby: User;

  @UpdateDateColumn({ type: 'datetime' })
  OI_modifiedat: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'OI_modifiedby' })
  OI_modifiedby: User;

  @Column({ type: 'boolean', default: true })
  OI_activestatus: boolean;
}
