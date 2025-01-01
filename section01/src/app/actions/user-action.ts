
'use server';

export async function searchUsers(name:string) {
    const DB = [
        {id: 1, name: "Kim"},
        {id: 2, name: "Lee"},
        {id: 3, name: "Park"}
    ];

    return DB.filter((user) => user.name.includes(name)); 
}