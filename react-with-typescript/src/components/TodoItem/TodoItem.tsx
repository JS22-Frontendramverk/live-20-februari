import './TodoItem.css';

interface TodoItemProps {
    task: string,
    done: boolean
}

// props tar emot datan som skickas in i komponenten
function TodoItem(props: TodoItemProps) {
    
    const { task, done } = props; // Här använder vi oss av "object destructering" där vi plockar ut egenskapen task från objektet props
    let doneText = 'Ej klar';

    if (done) {
        doneText = 'Klar'
    }

    return (
        <li className={`todo-item ${ done ? 'done' : ''}`} >{ task } - { doneText }</li>
    )
}

export default TodoItem;