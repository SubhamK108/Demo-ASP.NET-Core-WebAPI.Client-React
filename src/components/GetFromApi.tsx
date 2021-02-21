import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


interface User {
    id: number,
    name: string,
    email: string,
    password: string
};


const GetFromApi: React.FC = () => {

    useEffect(() => {

        fetchUsers();

    }, []);

    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {

        try {

            const response = await fetch("https://asp-net-web-api-demo.herokuapp.com/api/user/");

            if (response.ok) {

                console.log("Response Received 😃");

            } else {

                throw new Error();

            }

            const users: User[] = await response.json();
            setUsers(users);
            console.log(users);

        } catch (error) {

            console.log("Bad Request 😥");

        }
    };

    return (
        <div>
            <h1>Fetching the list of Users from the ASP.NET Core Web API...</h1>
            <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.email}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default GetFromApi;