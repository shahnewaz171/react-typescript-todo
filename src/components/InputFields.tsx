import React, { useRef } from 'react';

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
}

const InputFields: React.FC<Props> = ({ todo, setTodo, handleSubmit }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
        <>
            <form action="" onSubmit={(e) => {
                handleSubmit(e)
                inputRef.current?.blur();
            }}>
                <input type="input" ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} name="task" placeholder='Enter a task...' style={{ padding: '8px' }} />
                <input type="submit" value="Submit" style={{ padding: '8px' }} />
            </form>
            
        </>
    );
};

export default InputFields;