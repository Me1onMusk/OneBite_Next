

'use client';

import { userState } from "@/app/recoil/atoms";
import { useRecoilValue } from "recoil";

export default function UpdatedUserPage() {
    const user = useRecoilValue(userState);

    return (
        <div>
            <h1>Updated User Page</h1> 
            <div>Updated User Name: {user.name}</div>
            <div>Updated User email: {user.email}</div>
        </div>
    );
};