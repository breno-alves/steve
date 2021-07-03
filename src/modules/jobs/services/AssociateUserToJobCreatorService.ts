import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import JobCreatorsRepository from '../infra/typeorm/repositories/JobCreatorsRepository';

interface IRequest {
  name: string;
  userId: string;
  avatarURL?: string;
  profileURL?: string;
}

@injectable()
class AssociateUserToJobCreatorService {
  constructor(
    @inject('JobCreatorRepository')
    private jobCreatorRepository: JobCreatorsRepository,
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  public async execute(data: IRequest) {
    const { userId } = data;

    const userExists = await this.usersRepository.findById(userId);

    if (!userExists) {
      throw new AppError('User does not exist', 400);
    }

    const creatorExists = await this.jobCreatorRepository.find({ userId });

    if (creatorExists) {
      throw new AppError('User already associated to a Job creator', 400);
    }

    const creator = await this.jobCreatorRepository.create(data);
    return creator;
  }
}

export default AssociateUserToJobCreatorService;
