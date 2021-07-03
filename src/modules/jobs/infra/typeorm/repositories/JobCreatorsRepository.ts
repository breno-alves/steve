import CreateJobCreatorDTO from '@modules/jobs/dtos/CreateJobCreatorDTO';
import IJobCreatorRepository from '@modules/jobs/repositories/IJobCreatorsRepository';
import { getRepository, Repository } from 'typeorm';
import JobCreator from '../entities/JobCreator';

export default class JobCreatorsRepository implements IJobCreatorRepository {
  private jobCreatorRepository: Repository<JobCreator>;

  constructor() {
    this.jobCreatorRepository = getRepository(JobCreator);
  }

  public async create(data: CreateJobCreatorDTO) {
    const creator = this.jobCreatorRepository.create(data);
    await this.save(creator);
    return creator;
  }

  public async findById(id: string) {
    return this.jobCreatorRepository.findOne(id);
  }

  public async find(attributes: Partial<JobCreator>): Promise<JobCreator> {
    return this.jobCreatorRepository.findOne({
      where: { ...attributes },
    });
  }

  public async save(creator: JobCreator) {
    return this.jobCreatorRepository.save(creator);
  }
}
