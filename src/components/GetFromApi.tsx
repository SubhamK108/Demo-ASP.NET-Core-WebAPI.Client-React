import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


interface User {
    id: number,
    name: string,
    email: string,
    password: string
};


interface FetchTableProps {
    users: User[]
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

            const json: User[] = await response.json();
            console.log(json);
            setUsers(json);

        } catch (error) {

            console.log("Bad Request 😥");

        }
    };

    return (
        <div>
            <h1>Fetching the list of Users from the ASP.NET Core Web API...</h1>
            <br></br>
            {users.length === 0 ? <TableLoadingSpinner /> : <FetchTable users={users} />}
        </div>
    );
}


const FetchTable: React.FC<FetchTableProps> = (props) => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user: User) => (
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


const TableLoadingSpinner: React.FC = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <h3 style={{ paddingLeft: 20 }}>Loading...</h3>
        </div>
    );
}


export default GetFromApi;