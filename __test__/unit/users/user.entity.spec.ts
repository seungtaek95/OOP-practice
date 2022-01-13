import { User } from "../../../src/users/domain/user.entity";

describe('User Entity', () => {
  test('from() 을 통해 인스턴스 생성', () => {
    // given
    const email = 'kim@email.com';
    const password = 'password';
    const name = 'Kim';

    // when
    const user = User.from(
      email,
      password,
      name,
    );

    // then
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
    expect(user.name).toBe(name);
  });
});