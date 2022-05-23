import React from 'react';
import { Todo } from '../model';

interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    return (
        <section>
            {todos?.map((item, index) => {
                const { id, todo, isDone } = item;
                return (
                    <div key={index + 1}>
                        <h6>{todo}</h6>
                        <p>{id}</p>
                    </div>
                )
            })}
        </section>
    );
};

export default TodoList;