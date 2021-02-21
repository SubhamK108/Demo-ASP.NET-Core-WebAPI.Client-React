import React from "react";
import "bootstrap/dist/css/bootstrap.css";


const Home: React.FC = () => {
    return (
        <div>
            <h1>This is a Demo App made in:</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ASP.NET Core with C#</li>
                <li className="list-group-item">React with TypeScript</li>
                <li className="list-group-item">PostgreSQL</li>
                <li className="list-group-item">GitHub Pages</li>
                <li className="list-group-item">Heroku</li>
            </ul>
        </div>
    );
}


export default Home;