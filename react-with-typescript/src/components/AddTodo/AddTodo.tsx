import './AddTodo.css';
import { useState } from 'react';

interface AddTodoProps {
    newTodo: (todo: string) => void
}

function AddTodo(props: AddTodoProps) {
    const { newTodo } = props;
    const [todo, setTodo] = useState('');
    console.log('Laddas om!');

    return (
        <section className='add-todo'>
            <input type="text" placeholder="Ange todo"
            className='add-todo__input'
            onChange={ (event) => { setTodo(event.target.value); }} />
            <p>{ todo }</p>
            <button className='add-todo__button'
            onClick={ () => { newTodo(todo); }}>Lägg till</button>
        </section>
    )
}

export default AddTodo;