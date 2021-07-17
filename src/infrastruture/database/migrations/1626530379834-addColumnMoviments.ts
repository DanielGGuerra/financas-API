import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnMoviments1626530379834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'moviments',
            {
                name: 'isEntrance',
                type: 'boolean',
            } as TableColumn
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('moviments', 'isEntrance');
    }

}
