import React, { FormEvent, FormEventHandler, ReactElement, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory, useParams } from "react-router-dom";
import { User } from "../models/User";

interface EditApiParams {
    username: string
};

interface EditFormProps {
    user: User,
    setUser: Function,
    submitForm: FormEventHandler<HTMLFormElement>
};

const EditToApi = (): ReactElement => {
    const [user, setUser] = useState<User>({ name: "", username: "", email: "", password: "" });
    const history = useHistory();
    const params = useParams<EditApiParams>();

    useEffect(() => {
        const GetUserData = async (): Promise<void> => {
            try {
                const response = await fetch(`https://asp-net-core-api-demo.herokuapp.com/api/user/getuser/${params.username}`);
                if (response.ok) {
                    console.log("Response Received 😀");
                    const json: User = await response.json();
                    console.log(json);
                    setUser(json);
                } else {
                    throw new Error();
                }
            } catch (error) {
                console.log("Bad Request 😥");
            }
        };

        GetUserData();
    }, [params.username]);

    const SubmitForm = async (e: FormEvent): Promise<void> => {
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
        <div style={{textAlign: 'center'}}>
            {user.name === "" ? <FormLoadingSpinner /> : <EditForm user={user} setUser={setUser} submitForm={SubmitForm} />}
        </div>
    );
}

export default EditToApi;

const EditForm = (props: EditFormProps): ReactElement => {
    return (
        <form style={{textAlign: 'center'}} className="row g-3" onSubmit={props.submitForm}>
            <div className="col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input style={{textAlign: 'center'}} required type="text" className="form-control" value={props.user.name} placeholder="Your Name" onInput={e => props.setUser({ ...props.user, name: e.currentTarget.value })} />
            </div>
            <div className="col-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input style={{textAlign: 'center'}} required type="text" className="form-control" value={props.user.username} placeholder="Your Username" onInput={e => props.setUser({ ...props.user, username: e.currentTarget.value })} />
            </div>
            <div className="col-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input style={{textAlign: 'center'}} required type="email" className="form-control" value={props.user.email} placeholder="Your Email" onInput={e => props.setUser({ ...props.user, email: e.currentTarget.value })} />
            </div>
            <div className="col-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input style={{textAlign: 'center'}} required type="password" className="form-control" value={props.user.password} placeholder="Your Password" onInput={e => props.setUser({ ...props.user, password: e.currentTarget.value })} />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
        </form>
    );
}

const FormLoadingSpinner = (): ReactElement => {
    return (
        <div style={{marginTop: 100}} className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <h3 style={{ paddingLeft: 20 }}>Loading...</h3>
        </div>
    );
}