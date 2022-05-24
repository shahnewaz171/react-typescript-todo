import React, { useState } from 'react';
import { Todo } from '../model';
import SingleTogo from './SingleTogo';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {

    return (
        <section style={{ display: 'flex', flexWrap: 'wrap', padding: '30px', justifyContent: 'space-evenly' }}>
            {todos?.map((item, index) => <SingleTogo key={item.id} todo={item} todos={todos} setTodos={setTodos} /> )}
        </section>
    );
};

export default TodoList;