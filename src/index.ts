import { createServer } from 'node:http';
import { createUser, getAllUsers, HEADER } from './api/api';
import { INVALID_ROUTE } from './constants/message';
import { StatusCode } from './types/enums';
import { parseUrl } from './utils/parse-url';

const server = createServer(async (req, res) => {
  switch (req.method) {
    case 'GET': {
      if (parseUrl(req.url) === '/api/users') {
        getAllUsers(res);
        break;
      }
    }
    case 'POST': {
      if (parseUrl(req.url) === '/api/users') {
        await createUser(req, res);
        break;
      }
    }
    default: {
      res.writeHead(StatusCode.NOT_FOUND, HEADER);
      res.end(INVALID_ROUTE);
    }
  }
});
server.listen(8000, () => console.log('Server is running on http://localhost:8000'));
