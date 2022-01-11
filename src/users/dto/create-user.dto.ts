import { IsEmail, IsString } from "class-validator";
import { User } from "../domain/user.entity";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  toUserEntity() {
    return User.from(
      this.email,
      this.password,
      this.name,
    );
  }
}
