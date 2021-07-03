import { container } from 'tsyringe';

import '@shared/container/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IJobsRepository from '@modules/jobs/repositories/IJobsRepository';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import JobsRepository from '@modules/jobs/infra/typeorm/repositories/JobsRepository';
import JobCreatorsRepository from '@modules/jobs/infra/typeorm/repositories/JobCreatorsRepository';
import IJobCreatorsRepository from '@modules/jobs/repositories/IJobCreatorsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IJobsRepository>('JobsRepository', JobsRepository);

container.registerSingleton<IJobCreatorsRepository>(
  'JobCreatorsRepository',
  JobCreatorsRepository,
);
