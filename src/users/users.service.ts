import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = createUserDto.toUserEntity();
    
    const { id } = await this.usersRepository.save(user);
    
    return id;
  }
}
