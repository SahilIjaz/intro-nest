import { IsEmail, isEmpty, IsNumber, IsString } from 'class-validator';

export class createUserDto {
  @IsNumber()
  id: number;

  @IsString({ message: 'Name shoud be in string.' })
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;
}
