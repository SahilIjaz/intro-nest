import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UserController{
    
    @Get()
    getUsers(){
        return 'A request to get all user have been made.'
    }
}