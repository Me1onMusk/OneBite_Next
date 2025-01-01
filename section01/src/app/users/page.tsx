
'use client';

import { useEffect, useState } from "react";
import { searchUsers } from "../actions/user-action";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch(`/api/users?name=${'Kim'}`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         setUsers(data.users)
    //     });
    // }, []);

    useEffect(() => {
        searchUsers("Kim")
        .then((data) => setUsers(data))
    },[]);

    return (
        <main>
            <h1>Users</h1>
            {users.map((user) => (<p key={user.id}>{user.name}</p>))}
        </main>

    );
};