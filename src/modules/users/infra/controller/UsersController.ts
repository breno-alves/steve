import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      firstName,
      lastName,
      email,
      password,
    });

    return response.json({ ...user, password: undefined });
  }
}

export default UsersController;
