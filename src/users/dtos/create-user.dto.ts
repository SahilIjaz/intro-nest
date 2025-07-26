import { IsEmail, isEmpty, IsNumber, IsString } from 'class-validator';

export class createUser {
  @IsString({ message: 'Id needs to be a string value.' })
  id: number;

  @IsString({ message: 'Name shoud be in string.' })
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;
}
