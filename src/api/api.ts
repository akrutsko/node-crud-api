import type { IncomingMessage, OutgoingMessage, ServerResponse } from 'http';
import { db } from '../db/in-memory';
import { StatusCode } from '../types/enums';

export const HEADER = { 'Content-Type': 'application/json' };

export const getAllUsers = (res: ServerResponse) => {
  res.writeHead(StatusCode.OK, HEADER);
  res.end(JSON.stringify(db.getAllUsers()));
};

export const createUser = async (req: IncomingMessage, res: ServerResponse) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const { username, age, hobbies } = JSON.parse(body);
    res.writeHead(StatusCode.OK, HEADER);
    res.end();
    return;
  });
};
