import { Controller, Get, Post } from "@nestjs/common";
import { UserServices } from "./user.services";

@Controller('users')
export class UserController{
    
    @Get()
    getUsers(){
        const getUsers=new UserServices();
    return getUsers.getAllUsers();
    }


    @Post()
    createUser(){
         const createUser=new UserServices();
         return createUser.createUser({id:3, name:'Doe', age:30});
    }

    @Get(':id')
    getUserById(id:number){
        const getUserById=new UserServices();
        return getUserById.getUserById(id);
    }
}