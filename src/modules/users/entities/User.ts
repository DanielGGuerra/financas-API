import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    email!: string;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column()
    balance!: number;

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

export { User }