import {MigrationInterface, QueryRunner} from "typeorm";

export class setUsersToJobCreatorRelationship1625340587127 implements MigrationInterface {
    name = 'setUsersToJobCreatorRelationship1625340587127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobCreators" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "jobCreators" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "jobCreators" ADD CONSTRAINT "UQ_45b37ae5e93733accbf4896a392" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "jobCreators" ADD CONSTRAINT "FK_45b37ae5e93733accbf4896a392" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobCreators" DROP CONSTRAINT "FK_45b37ae5e93733accbf4896a392"`);
        await queryRunner.query(`ALTER TABLE "jobCreators" DROP CONSTRAINT "UQ_45b37ae5e93733accbf4896a392"`);
        await queryRunner.query(`ALTER TABLE "jobCreators" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "jobCreators" ADD "user_id" character varying`);
    }

}
