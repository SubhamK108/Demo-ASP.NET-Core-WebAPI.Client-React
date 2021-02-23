import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


interface User {
    id: number,
    name: string,
    email: string,
    password: string
};


const PostToApi: React.FC = () => {

    const [user, setUser] = useState<User>({ id: NaN, name: "", email: "", password: "" });

    const SubmitForm = async (e: React.FormEvent) => {

        e.preventDefault();
        console.log(user);

        try {

            const response = await fetch("https://asp-net-web-api-demo.herokuapp.com/api/user/adduser/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {

                console.log("User Added 😃");
                alert("User Added 😃")

            } else {

                throw new Error();

            }

        } catch (error) {

            console.log("Invalid Credentials! 😥");
            alert("Invalid Credentials! 😥")

        }
    }

    return (
        <form className="row g-3" onSubmit={SubmitForm}>
            <div className="col-md-2">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" className="form-control" placeholder="ID" onChange={e => setUser({ ...user, id: parseInt(e.target.value) })} />
            </div>
            <div className="col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" onChange={e => setUser({ ...user, name: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" onChange={e => setUser({ ...user, email: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={e => setUser({ ...user, password: e.target.value })} />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
        </form>
    );
}


export default PostToApi;