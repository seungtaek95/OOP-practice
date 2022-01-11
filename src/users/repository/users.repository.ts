import { EntityRepository, Repository } from "typeorm";
import { User } from "../domain/user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}