import React, { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Home = (): ReactElement => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>This is a Demo App</h1>
            <h2>Tech Stack</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ASP.NET Core with C# in the Backend</li>
                <li className="list-group-item">React with TypeScript in the Frontend</li>
                <li className="list-group-item">Bootstrap for styling</li>
                <li className="list-group-item">PostgreSQL as the Database</li>
                <li className="list-group-item">Docker</li>
                <li className="list-group-item">GitHub Pages</li>
                <li className="list-group-item">Heroku for Hosting</li>
            </ul>
        </div>
    );
}

export default Home;