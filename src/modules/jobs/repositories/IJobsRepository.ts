import CreateJobDTO from '../dtos/CreateJobDTO';
import Job from '../infra/typeorm/entities/Job';

export default interface IJobsRepository {
  create(data: CreateJobDTO): Promise<Job>;
  findById(jobId: string): Promise<Job>;
  save(job: Job): Promise<Job>;
}
