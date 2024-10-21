import type { User } from '../types/user';

class InMemoryDatabase {
  db: User[] = [];

  getAllUsers() {
    return this.db;
  }
}

export const db = new InMemoryDatabase();
