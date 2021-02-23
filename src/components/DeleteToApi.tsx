import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


const DeleteToApi: React.FC = () => {

    const [id, setId] = useState<number>(NaN);

    const SubmitForm = async (e: React.FormEvent) => {

        e.preventDefault();
        console.log(id);

        try {

            const response = await fetch(`https://asp-net-web-api-demo.herokuapp.com/api/user/deleteuser/${id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {

                console.log("User Deleted 😃");
                alert("User Deleted 😃")

            } else {

                throw new Error();

            }

        } catch (error) {

            console.log("Invalid User ID! 😥");
            alert("Invalid User ID! 😥")

        }
    }

    return (
        <form className="row g-3" onSubmit={SubmitForm}>
            <div className="col-md-2">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" className="form-control" placeholder="ID" onChange={e => setId(parseInt(e.target.value))} />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Delete User</button>
            </div>
        </form>
    );
}


export default DeleteToApi;