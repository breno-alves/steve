import { getRepository, Repository } from 'typeorm';
import CreateUserDTO from '@modules/users/dtos/CreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  public async create(data: CreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(data);
    await this.save(user);
    return user;
  }

  public async findById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  public async save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}

export default UsersRepository;
