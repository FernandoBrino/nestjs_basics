import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser({ username, email }: CreateUserType) {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      username,
      email,
    };

    this.fakeUsers.push(newUser);
    return newUser;
  }

  fetchUserById(id: number) {
    const user = this.fakeUsers.find((user) => user.id === id);
    return user;
  }
}
