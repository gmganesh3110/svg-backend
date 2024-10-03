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
    F_createdat: Date;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'F_createdBy' })
    F_createdby: User;
  
    @UpdateDateColumn({ type: 'datetime' })
    F_modifiedat: Date;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'F_modifiedBy' })
    F_modifiedby: User;
  
    @Column({ type: 'boolean', default: true })
    F_activestatus: boolean;
}

