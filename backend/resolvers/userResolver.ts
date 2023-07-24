import { Resolver, Query, Mutation, Args } from "type-graphql";
import { User } from "../models/userModel";

@Resolver(User)
export class UserResolver {
  private users: User[] = []; // Source de données réelle (remplace par une base de données, API, etc.)

  @Query(() => [User])
  users(): User[] {
    return this.users;
  }

  @Query(() => User, { nullable: true })
  user(@Args("id") id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  @Mutation(() => User)
  createUser(@Args("username") username: string, @Args("email") email: string): User {
    const newUser: User = { id: String(this.users.length + 1), username, email };
    this.users.push(newUser);
    return newUser;
  }
}
