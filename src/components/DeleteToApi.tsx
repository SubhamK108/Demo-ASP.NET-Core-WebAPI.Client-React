import React, { ReactElement, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";

function DeleteToApi(): ReactElement {
    const [key, setKey] = useState<string>("");
    const history = useHistory();

    const submitForm = async (e: React.FormEvent): Promise<void> => {
        console.clear();
        e.preventDefault();
        console.log(key);
        try {
            const response = await fetch(`https://asp-net-core-api-demo.herokuapp.com/api/user/deleteuser/${key}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                console.log("User Deleted 😃");
                alert("User Deleted 😃");
                history.push("/get_from_api");
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
            console.log("Invalid Username or Email! 😥");
            alert("Invalid Username or Email! 😥");
        }
    }

    return (
        <form style={{ textAlign: 'center' }} className="row g-3" onSubmit={submitForm}>
            <div style={{ margin: 'auto' }} className="col-6">
                <label htmlFor="id" className="form-label">Email / Username</label>
                <input style={{ textAlign: 'center' }} required type="text" className="form-control" placeholder="Email / Username" onInput={e => setKey(e.currentTarget.value)} />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Delete User</button>
            </div>
        </form>
    );
}

export default DeleteToApi;