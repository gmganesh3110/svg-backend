import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Floor {
    @PrimaryGeneratedColumn()
    F_id:number;

    @Column({type:'varchar'})
    F_floorname:string;

    @Column({type:'varchar'})
    F_description:string;

    @CreateDateColumn({ type: 'datetime' })
    F_createdAt: Date;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'F_createdBy' })
    F_createdBy: User;
  
    @UpdateDateColumn({ type: 'datetime' })
    F_modifiedAt: Date;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'F_modifiedBy' })
    F_modifiedBy: User;
  
    @Column({ type: 'boolean', default: true })
    F_activeStatus: boolean;
}

