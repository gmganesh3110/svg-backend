import { User } from 'src/user/entities/user.entity';
import { Usermenu } from 'src/usermenu/entities/usermenu.entity';
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
  export class Usersubmenu {
    @PrimaryGeneratedColumn()
    USM_id: number;
    
    @ManyToOne(() => Usermenu)
    @JoinColumn({ name: 'USM_menuid' })
    USM_menuid: Usermenu;

    @Column({ type: 'varchar' })
    USM_name: string;
  
    @Column({ type: 'varchar' })
    USM_link: string;
  
    @Column({ type: 'text' })
    USM_icon: string;
  
    @Column({})
    USM_sequence: number;
  
    @CreateDateColumn({ type: 'datetime' })
    USM_createdat: Date;
  
    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'USM_createdby' })
    USM_createdby: User;
  
    @UpdateDateColumn({ type: 'datetime' })
    USM_modifiedat: Date;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'USM_modifiedby' })
    USM_modifiedby: User;
  
    @Column({ type: 'boolean', default: true })
    USM_activeStatus: boolean;
  }
  