import React, { ReactElement, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { User } from "../models/User";
import { useHistory } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";

interface FetchTableProps {
    users: User[]
};

const GetFromApi = (): ReactElement => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async (): Promise<void> => {
            console.clear();
            try {
                const response = await fetch("https://asp-net-core-api-demo.herokuapp.com/api/user/");
                if (response.ok) {
                    console.log("Response Received 😃");
                    const json: User[] = await response.json();
                    console.log(json);
                    setUsers(json);
                }
                else {
                    throw new Error();
                }
            }
            catch (error) {
                console.log("Bad Request 😥");
            }
        };

        fetchUsers();
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Fetching the list of Users from the ASP.NET Core Web API...</h1>
            <br></br>
            {users.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <FetchTable 
                    users={users}
                />
            )}
        </div>
    );
}

const FetchTable = (props: FetchTableProps): ReactElement => {
    const history = useHistory();

    return (
        <div style={{ textAlign: 'center' }}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email ID</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user: User) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <i 
                                    style={{ cursor: "pointer", color: "#196ce0" }}
                                    title="Edit User"
                                    onClick={() => history.push(`/edittoapi/${user.username}`)}
                                    className="fas fa-user-edit"
                                >
                                </i>
                            </td>                
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetFromApi;