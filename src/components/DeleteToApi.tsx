import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";


const DeleteToApi: React.FC = () => {

    const [key, setKey] = useState<string>("");
    const history = useHistory();

    const SubmitForm = async (e: React.FormEvent) => {

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

            } else {

                throw new Error();

            }

        } catch (error) {

            console.log("Invalid Username or Email! 😥");
            alert("Invalid Username or Email! 😥");

        }
    }

    return (
        <form className="row g-3" onSubmit={SubmitForm}>
            <div className="col-6">
                <label htmlFor="id" className="form-label">Email / Username</label>
                <input type="text" className="form-control" placeholder="Your Email / Username" onChange={e => setKey(e.target.value)} />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Delete User</button>
            </div>
        </form>
    );
}


export default DeleteToApi;
