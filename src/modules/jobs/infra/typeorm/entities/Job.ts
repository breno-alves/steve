import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export type SeniorityLevel = 'INTERN' | 'TRAINEE' | 'JUNIOR' | 'MID' | 'SENIOR';

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  BRL = 'BRL',
}

@Entity('jobs')
class Job {
  // Could create a relation with Company entity and get photo/url

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  salary: number;

  // need to refact
  @Column({ nullable: true, type: 'enum', enum: Currency })
  currency: Currency;

  @Column({ name: 'seniority_level', nullable: true, type: 'simple-array' })
  seniorityLevel: string[];

  @Column({ name: 'url' })
  URL: string;

  @Column({ nullable: true, type: 'simple-array' })
  labels: string[];

  //relation
  @Column({ name: 'creator_id' })
  creatorId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Job;
