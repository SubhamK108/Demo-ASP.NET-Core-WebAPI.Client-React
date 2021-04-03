import React, { ReactElement, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { User } from "../models/User";
import { useHistory } from "react-router";

interface FetchTableProps {
    users: User[]
};

const GetFromApi = (): ReactElement => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async (): Promise<void> => {
            try {
                const response = await fetch("https://asp-net-core-api-demo.herokuapp.com/api/user/");
                if (response.ok) {
                    console.log("Response Received 😃");
                    const json: User[] = await response.json();
                    console.log(json);
                    setUsers(json);
                } else {
                    throw new Error();
                }
            } catch (error) {
                console.log("Bad Request 😥");
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Fetching the list of Users from the ASP.NET Core Web API...</h1>
            <br></br>
            {users.length === 0 ? <TableLoadingSpinner /> : <FetchTable users={users} />}
        </div>
    );
}

const FetchTable = (props: FetchTableProps): ReactElement => {
    const history = useHistory();

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user: User) => (
                        <tr style={{ cursor: "pointer" }} onClick={e => history.push(`/edittoapi/${user.username}`)} key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const TableLoadingSpinner = (): ReactElement => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <h3 style={{ paddingLeft: 20 }}>Loading...</h3>
        </div>
    );
}

export default GetFromApi;