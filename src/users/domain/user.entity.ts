import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;
  
  @Column()
  password: string;
  
  @Column()
  name: string;
  
  @Column({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  static from(
    email: string,
    password: string,
    name: string,
  ) {
    const user = new User();
    user.email = email;
    user.password = password;
    user.name = name;
    user.createdAt = new Date();
    return user;
  }
}
