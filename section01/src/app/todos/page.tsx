
'use client';

import { useMutation, useQuery } from "@tanstack/react-query";
import { createToDos, getToDos } from "../actions/todo-actions";
import { useState } from "react";
import { queryClient } from "../config/ReactQueryProvider";

export default function ToDosPage() {
    const [todoInput, setToDoInput] = useState("");

    const todosQuery = useQuery({
        queryKey: ['todos'],
        queryFn: () => getToDos()
    });

    const creatToDoMutation = useMutation({
        mutationFn: async () => {
            if(todoInput === '') 
                throw new Error("ToDo를 입력해주세요")
            return createToDos(todoInput);
        },
        onSuccess: (TODOS) => {
            todosQuery.refetch();
            queryClient.invalidateQueries(['todos'])
        },
        onError: (error: any) => {
            alert(error.message);
        }
    });

    return (
        <div>
            <h1>ToDos</h1>
            <input 
                type="text"
                placeholder="Enter ToDo"
                value={todoInput}
                onChange={(e) => setToDoInput(e.target.value)} />
            <button
                onClick={() => creatToDoMutation.mutate()}>
                {
                    creatToDoMutation.isPending ? 'Loading...' : '투두생성'
                }
            </button>

            {
                todosQuery.isLoading && <p>Loading...</p>
            }

            {
                todosQuery.data && todosQuery.data.map((todo, index) => 
                    (<p key={index}>{todo}</p>)
                )
            }
        </div>
    );
};