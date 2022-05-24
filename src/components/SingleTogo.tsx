import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTogo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleDeleteItem = (id: number) => {
        const filterItem = todos.filter(item => item.id !== id);
        setTodos(filterItem);
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        const data = todos.map(item => item.id === id ? { ...item, todo: editTodo } : item);
        setTodos(data);
    }

    return (
        <form key={todo.id} onSubmit={(e) => handleSubmit(e, todo.id)} style={{ width: '25%', padding: '0px 15px 15px 0px' }}>
            <div style={{ border: '1px solid #707070' }}>
                {edit ?
                    <input type="input" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} ref={inputRef} name="task" style={{ padding: '2px', marginTop: '10px' }} />
                    :
                    <h4 style={{ marginTop: '10px' }}>{todo.todo}</h4>
                }
                <p>{todo.id}</p>
                <div style={{ marginBottom: '10px' }}>
                    <button onClick={() => {
                        setEdit(!edit);
                    }} style={{ cursor: 'pointer', marginLeft: '5px' }}>Edit</button>
                    <button onClick={() => handleDeleteItem(todo.id)} type='button' style={{ marginLeft: '10px', cursor: 'pointer' }}>Delete</button>
                </div>
            </div>
        </form>
    );
};

export default SingleTogo;