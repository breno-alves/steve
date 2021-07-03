import {MigrationInterface, QueryRunner} from "typeorm";

export class FixingDataTypes1625272394189 implements MigrationInterface {
    name = 'FixingDataTypes1625272394189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "seniority_level"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "seniority_level" text array`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "labels"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "labels" text array`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "labels"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "labels" text`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "seniority_level"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "seniority_level" text`);
    }

}
