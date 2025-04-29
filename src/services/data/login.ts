import { URL } from '../../constants/URL';
import { User } from '../../models/User';
import { RequestService } from '../../lib/axios';

export const login = ({ username, password }: { username: string, password: string }) => {
  return RequestService.post<User>(URL.LOGIN, { username, password });
};

