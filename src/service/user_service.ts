import axios from "axios";
import type { User } from "../models";


export async function fetchUsers(): Promise<User[]>
{
    let users: User[] = [];

    try{
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");

        if( response.data )//data is a list
        {
            response.data.map( (datum: any) => {
                users.push({"user_name": datum["name"], 
                    "user_email": datum["email"], 
                    "user_phone": datum["phone"]});
            });
            console.log(response.data);
        }
    }catch( error: any)
    {
        console.log("Error: " + error);
    }

    return users;
}