import { db } from '../db/in-memory';

export const getAllUsers = () => JSON.stringify(db.getAllUsers());
