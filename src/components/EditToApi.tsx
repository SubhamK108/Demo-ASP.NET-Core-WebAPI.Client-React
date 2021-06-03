import React, { FormEvent, FormEventHandler, ReactElement, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { User } from "../models/User";
import LoadingSpinner, { LoadingSpinnerSmall } from "../shared/LoadingSpinner";

interface EditApiParams {
    username: string
};

interface EditFormProps {
    user: User,
    validUsername: number,
    startUsernameCheck: Function,
    setUser: Function,
    submitForm: FormEventHandler<HTMLFormElement>
};

const EditToApi = (): ReactElement => {
    const [user, setUser] = useState<User>({ name: "", username: "", email: "", password: "" });
    const [validUsername, setValidUsername] = useState<number>(-1);
    const [originalUsername, setOriginalUsername] = useState<string>("");
    const [checkerTimer, setCheckerTimer] = useState<NodeJS.Timeout>();
    const history = useHistory();
    const params = useParams<EditApiParams>();

    useEffect(() => {
        const getUserData = async (): Promise<void> => {
            console.clear();
            try {
                const response = await fetch(`https://asp-net-core-api-demo.herokuapp.com/api/user/getuser/${params.username}`);
                if (response.ok) {
                    console.log("Response Received 😀");
                    const json: User = await response.json();
                    console.log(json);
                    setUser(json);
                    setOriginalUsername(json.username);
                }
                else {
                    throw new Error();
                }
            }
            catch (error) {
                console.log("Bad Request 😥");
            }
        };

        getUserData();
    }, [params.username]);

    const submitForm = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`https://asp-net-core-api-demo.herokuapp.com/api/user/updateuser/${params.username}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                console.log("User Updated 😃");
                alert("User Updated 😃");
                history.push("/get_from_api");
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
            console.log("Invalid Credentials! 😥");
            alert("Invalid Credentials! 😥");
        }
    }

    const checkUsername = async (key: string): Promise<void> => {
        try {
            const response = await fetch(`https://asp-net-core-api-demo.herokuapp.com/api/user/checkforuser/${key}`);
            if (response.ok) {
                const result: string = await response.text();
                if (result.toLowerCase() === "false" || key === originalUsername) {
                    setValidUsername(1);
                }
                else {
                    setValidUsername(0);
                }
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
        }
    }

    const startUsernameCheck = async (username: string) => {
        if (checkerTimer !== undefined) {
            clearTimeout(checkerTimer);
        }
        setUser(prevState => ({
            ...prevState,
            username: username
        }));
        if (username === "") {
            setValidUsername(-1);
        }
        else {
            setValidUsername(100);
            const timeOutId: NodeJS.Timeout = setTimeout(() => checkUsername(username), 350);
            setCheckerTimer(timeOutId);
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {user.name === "" ? (
                <LoadingSpinner />
            ) : (
                <EditForm
                    user={user}
                    validUsername={validUsername}
                    startUsernameCheck={startUsernameCheck}
                    setUser={setUser}
                    submitForm={submitForm}
                />
            )}
        </div>
    );
}

export default EditToApi;

const EditForm = (props: EditFormProps): ReactElement => {
    return (
        <form style={{ textAlign: 'center' }} className="row g-3" onSubmit={props.submitForm}>
            <div className="col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    style={{ textAlign: 'center' }}
                    required
                    type="text"
                    className="form-control"
                    value={props.user.name}
                    placeholder="Your Name"
                    onInput={e => props.setUser({ ...props.user, name: e.currentTarget.value })}
                />
            </div>
            <div className="col-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    style={{ textAlign: 'center' }}
                    required
                    type="text"
                    className="form-control"
                    value={props.user.username}
                    placeholder="Your Username"
                    onInput={e => props.startUsernameCheck(e.currentTarget.value)}
                />
                {props.validUsername === -1 ? (
                    <p></p>
                ) : (
                    props.validUsername === 100 ? (
                        <LoadingSpinnerSmall />
                    ) : (
                        props.validUsername === 1 ? (
                            <p style={{ color: "darkgreen" }}>{props.user.username} is available. ✔</p>
                        ) : (
                            <p style={{ color: "darkred" }}>{props.user.username} is not available. ❌</p>
                        )
                    )
                )}
            </div>
            <div className="col-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    style={{ textAlign: 'center' }}
                    required
                    disabled
                    type="email"
                    className="form-control"
                    value={props.user.email}
                />
            </div>
            <div className="col-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    style={{ textAlign: 'center' }}
                    required
                    type="password"
                    className="form-control"
                    value={props.user.password}
                    placeholder="Your Password"
                    onInput={e => props.setUser({ ...props.user, password: e.currentTarget.value })}
                />
            </div>
            <div style={{ paddingTop: 20 }} className="col-12">
                <button type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>
    );
}
