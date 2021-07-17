import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('moviments')
export class Moviment {
    @PrimaryColumn()
    id!: string;

    @Column('user_id')
    user_id!: string;

    @Column()
    isEntrance!: boolean;

    @Column()
    value!: number;

    @Column()
    description!: string;

    @Column()
    date_moviment!: Date;

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