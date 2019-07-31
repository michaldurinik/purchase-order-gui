export enum EnumUserType {
  Normal,
  Approver,
  Finance
}

export class User {
  constructor(public nnumber: string, public name: string, public email: string, public isAuthenticated: boolean,
              public userType: EnumUserType, public secret: object) {
  }

  public isValid() {
    return this.isAuthenticated;
  }
}

//   authenticate(): void {
//     this.isAuthenticated = true;
//   }
//
//   deauthenticate(): void {
//     this.isAuthenticated = false;
//   }
// }

// export function sampleUsers() {
//   const userList = [];
//   userList.push(new User('n1111111', 'karen', 'Karen O\'Brien', false, UserType.Finance));
//   userList.push(new User('n2222222', 'david', 'David Duffy', false, UserType.Approver));
//   userList.push(new User('n3333333', 'joe', 'Joe King', false, UserType.Normal));
//   return userList;
// }
