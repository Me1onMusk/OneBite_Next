
'use server';

import { atom } from "recoil"

export const userState = atom <{
    email: string,
    name: string
}>({
    key: 'useState',
    default: {
        email: "",
        name: ""
    }
});