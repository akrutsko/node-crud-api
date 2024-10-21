import { createServer } from 'node:http';
import { getAllUsers } from './api/api';
import { parseUrl } from './utils/parse-url';
import { StatusCode } from './types/enums';
import { INVALID_ROUTE } from './constants/message';

export const HEADER = { 'Content-Type': 'application/json' };

const server = createServer((req, res) => {
  if (req.method === 'GET' && parseUrl(req.url) === '/api/users') {
    const users = getAllUsers();
    res.writeHead(StatusCode.OK, HEADER);
    res.end(users);
    return;
  }

  res.writeHead(StatusCode.NOT_FOUND, HEADER);
  res.end(INVALID_ROUTE);
});
server.listen(8000, () => console.log('Server is running on http://localhost:8000'));
