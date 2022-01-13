import { CreateUserDto } from "../../../src/users/dto/create-user.dto";
import { User } from "../../../src/users/domain/user.entity";

describe('User Entity', () => {
  test('toUserEntity() 를 통해 User 인스턴스 생성', () => {
    // given
    const createUserDto = new CreateUserDto();
    createUserDto.email = 'kim@email.com';
    createUserDto.password = 'password';
    createUserDto.name = 'Kim';

    // when
    const user = createUserDto.toUserEntity();

    // then
    expect(user instanceof User).toBe(true);
    expect(user.email).toBe(createUserDto.email);
    expect(user.password).toBe(createUserDto.password);
    expect(user.name).toBe(createUserDto.name);
  });
});