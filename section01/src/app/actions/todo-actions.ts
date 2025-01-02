
'use server';

var TODOS: string[] = [
    "Go to Market"
];

export const getToDos = async () => {
    return TODOS;
};

export const createToDos = async (data: string) => {
    // 1초 대기 
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    TODOS.push(data);

    return TODOS;
};