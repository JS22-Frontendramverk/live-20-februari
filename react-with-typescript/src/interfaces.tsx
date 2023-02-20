interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId?: number // userId används inte så gör den som ej obligatorisk med ?
}

export type { Todo }