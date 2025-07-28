import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from './create-user.dto';

export class updateuserDto extends PartialType(createUserDto) {}
