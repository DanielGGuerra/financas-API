import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMoviments1626528048266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'moviments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'value',
                        type: 'decimal(10,2)',
                        isNullable: false,
                    },
                    {
                        name: 'date_moviment',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_user_moviments',
                        columnNames: ['user_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('moviments');
    }

}
