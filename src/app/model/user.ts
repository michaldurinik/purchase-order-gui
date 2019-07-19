export enum UserType {
  Approver,
  Finance,
  Normal
}

export class User {
  constructor(public nnumber: string, public password: string, public name: string, public isAuthenticated = false,
              public type: UserType) {
  }

  public authenticate(): void {
    this.isAuthenticated = true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}

export function sampleUsers() {
  const userList = [];
  userList.push(new User('n1111111', 'karen', 'Karen O\'Brien', false, UserType.Finance));
  userList.push(new User('n2222222', 'david', 'David Duffy', false, UserType.Approver));
  userList.push(new User('n3333333', 'joe', 'Joe King', false, UserType.Normal));
  return userList;
}
