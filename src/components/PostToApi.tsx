import React, { ReactElement, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import { User } from "../models/User";

const PostToApi = (): ReactElement => {
    const [user, setUser] = useState<User>({ name: "", username: "", email: "", password: "" });
    const history = useHistory();

    const SubmitForm = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch("https://asp-net-core-api-demo.herokuapp.com/api/user/adduser/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                console.log("User Added 😃");
                alert("User Added 😃");
                history.push("/get_from_api");
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log("Invalid Credentials! 😥");
            alert("Invalid Credentials! 😥");
        }
    }

    return (
        <form style={{textAlign: 'center'}} className="row g-3" onSubmit={SubmitForm}>
            <div className="col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input style={{textAlign: 'center'}} required type="text" className="form-control" placeholder="Your Name" onInput={e => setUser({ ...user, name: e.currentTarget.value })} />
            </div>
            <div className="col-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input style={{textAlign: 'center'}} required type="text" className="form-control" placeholder="Your Username" onInput={e => setUser({ ...user, username: e.currentTarget.value })} />
            </div>
            <div className="col-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input style={{textAlign: 'center'}} required type="email" className="form-control" placeholder="Your Email" onInput={e => setUser({ ...user, email: e.currentTarget.value })} />
            </div>
            <div className="col-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input style={{textAlign: 'center'}} required type="password" className="form-control" placeholder="Your Password" onInput={e => setUser({ ...user, password: e.currentTarget.value })} />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
        </form>
    );
}

export default PostToApi;