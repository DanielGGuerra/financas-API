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
        if(!this.balance) {
            this.balance = 0;
        }
    }

    setBalance(value: number) {
        this.balance = value;
    }
}

export { User }