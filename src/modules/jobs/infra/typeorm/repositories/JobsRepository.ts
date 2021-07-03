import IJobsRepository from '@modules/jobs/repositories/IJobsRepository';
import { getRepository, Repository } from 'typeorm';
import Job from '../entities/Job';
import CreateJobDTO from '@modules/jobs/dtos/CreateJobDTO';
export default class JobsRepository implements IJobsRepository {
  private jobsRepository: Repository<Job>;

  constructor() {
    this.jobsRepository = getRepository(Job);
  }

  public async create(data: CreateJobDTO): Promise<Job> {
    const job = this.jobsRepository.create(data);
    await this.save(job);
    return job;
  }

  public async findById(id: string): Promise<Job> {
    return this.jobsRepository.findOne(id);
  }

  public async save(job: Job): Promise<Job> {
    return this.jobsRepository.save(job);
  }
}
