import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('moviments')
export class Moviment {
    @PrimaryColumn()
    id!: string;

    @Column('user_id')
    user!: string;

    @Column()
    isEntrance!: boolean;

    @Column()
    value!: number;

    @Column()
    description!: string;

    @CreateDateColumn()
    create_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}