export class UserServices{
    users:{id:number, name:string,age:number}[]=[
        {id:1, name:'John',age:20},
        {id:2, name:'Jane',age:25}
    ]

    getAllUsers()
    {
        return this.users;
    }

    getUserById(id:number){
        return this.users.find(user => user.id===id);
    }

    createUser(user:{id:number, name:string,age:number}){
        this.users.push(user);
        return user;
    }
}