import React, { useState, useEffect } from "react";

export default function Ex04() {
    /*
        Let's fetch some random data and display it in our component
        We'll use this mock api endpoint https://jsonplaceholder.typicode.com/users
        It retrieves a list of mock users. We want to do a basic get request as soon
        as the page loads up, and display each user's name and email in a <li></li>
     */
    // const [users, setUsers] = useState([]);
    return (
        <div>
            <h2>Ex04</h2>
            <ul id='users'>

            </ul>
        </div>
    );
}