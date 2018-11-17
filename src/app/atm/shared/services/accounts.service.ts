import { IAccounts } from '../interfaces';

export class AccountService {

  accounts = [
    {id: '1234', name: 'Cristian', password: '1234'}
  ];

  constructor() {

  }

  validateAccount(id: string, pass: string) {
    if (this.accounts.findIndex((x) => x.password === pass && x.id === id)) {
     return true;
    } else {
      return false;
    }
  }
}
