import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Body,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { UserServices } from './user.services';
import { createUserDto } from './dtos/create-user.dto';
import { getUserParam } from './dtos/get-user-param.dto';
import { updateuserDto } from './dtos/update-user.dto';
@Controller('users')
// popopop
export class UserController {
  constructor(private userServices: UserServices) {}

  @Get('')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('isMarried') isMarried: boolean,
    // @Param() param: getUserParam,
  ) {
    console.log('imite ss ', limit);
    console.log('pgges required wre : ', page);
    console.log('params has :', isMarried);

    return this.userServices.getAllUsers();
  }

  @Post()
  createUser(@Body() user: createUserDto) {
    return this.userServices.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.getUserById(id);
  }

  @Patch()
  updateUser(@Body() user: updateuserDto) {
    console.log('user update method created successfully.');
  }
}
