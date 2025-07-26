import { Controller, Get, Post, Param, Query, ParseIntPipe, DefaultValuePipe} from "@nestjs/common";
import { UserServices } from "./user.services";

@Controller('users')
export class UserController{
    
    @Get()
    getUsers(@Query('limit',  new DefaultValuePipe(10)) query:any){
        const getUsers=new UserServices();
        if(query.name)
        {
            return getUsers.getAllUsers().filter(user => user.name === query.name);
        }
    return getUsers.getAllUsers();
    }


    @Post()
    createUser(){
         const createUser=new UserServices();
         return createUser.createUser({id:3, name:'Doe', age:30});
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        const getUserById=new UserServices();
        return getUserById.getUserById(id);
    }
}