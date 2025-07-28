import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServices {
  users: { id: number; name: string; age: number; email: string }[] = [
    { id: 1, name: 'John', age: 20, email: 'john@gmail.com' },
    { id: 2, name: 'Jane', age: 25, email: 'jane@gmail.com' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: { id: number; name: string; age: number; email: string }) {
    this.users.push(user);
    return this.users;
  }
}
