import { Controller, Get, Post, Param, Query } from "@nestjs/common";
import { UserServices } from "./user.services";

@Controller('users')
export class UserController{
    
    @Get()
    getUsers(@Query() query:any){
        const getUsers=new UserServices();
    return getUsers.getAllUsers();
    }


    @Post()
    createUser(){
         const createUser=new UserServices();
         return createUser.createUser({id:3, name:'Doe', age:30});
    }

    @Get(':id')
    getUserById(@Param('id') id:any){
        const getUserById=new UserServices();
        return getUserById.getUserById(+id);
    }
}