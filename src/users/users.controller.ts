import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const id = await this.usersService.create(createUserDto);
    return { id };
  }
}
