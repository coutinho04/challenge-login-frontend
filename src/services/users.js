import Api from './api';

const UserService = {
  login: async (params) => {
    const response = await Api.get('/users');
    const users = response.data;
    const existUser = users.find((user) => {
      return user.email === params.email && user.password === params.password;
    });
    if (existUser) {
      return 'Válido';
    }
    return 'Inválido';
  },
};

export default UserService;
