import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnBalance1626524892599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            {
                name: 'balance',
                type: 'decimal(10,2)',
            } as TableColumn
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'balance')
    }

}
