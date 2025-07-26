import { Controller, Get, Post, Param, Query, ParseIntPipe, DefaultValuePipe} from "@nestjs/common";
import { UserServices } from "./user.services";

@Controller('users')
export class UserController{
userServices:UserServices;

constructor(){
    this.userServices = new UserServices();
}

    @Get()
    getUsers(@Query('limit',  new DefaultValuePipe(10), ParseIntPipe) limit:number,
            @Query('page',new DefaultValuePipe(1), ParseIntPipe) page:number ){
                console.log('imite ss ',limit);
                console.log('pgges required wre : ',page);

    return this.userServices.getAllUsers();
    }


    @Post()
    createUser(){
         return this.userServices.createUser({id:3, name:'Doe', age:30, email:'doe@gamil.com'});
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        return this.userServices.getUserById(id);
    }
}