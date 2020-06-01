import React, { useState, useEffect } from "react";

export default function Ex04solved() {

    const [users, setUsers] = useState([]);
    async function fetchUsers () {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return response.json()
    }

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, []);

    const renderUsers = users => (
        !!users.length && users.map( user => (
            <li key={user.id}>
                <span>{user.name} | </span>
                <span>{user.email}</span>
            </li>
        ))
    );

    return (
        <div>
            <h2>Ex04solved</h2>
            <ul id='users'>
                {renderUsers(users)}
            </ul>
        </div>
    );
}