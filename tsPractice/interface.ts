interface IUser
{
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user : IUser = {name: "John", id: 1, email: ''};


interface IEmployee extends IUser
{
    salary: number;
}

let employee: IEmployee = {name: "John", id: 1, email: '', salary: 1000};

//Export/import from different files
export interface ILogin
{
    login(): IUser;
}


