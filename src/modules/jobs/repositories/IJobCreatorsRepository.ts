import CreateJobCreatorDTO from '../dtos/CreateJobCreatorDTO';
import JobCreator from '../infra/typeorm/entities/JobCreator';

export default interface IJobCreatorsRepository {
  create(data: CreateJobCreatorDTO): Promise<JobCreator>;
  find(attributes: Partial<JobCreator>): Promise<JobCreator>;
  findById(creatorId: string): Promise<JobCreator>;
  save(creator: JobCreator): Promise<JobCreator>;
}
