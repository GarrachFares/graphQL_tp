

export const User = {
    todos: (user,_,{db}) => {
        return db.todos.filter(todo => todo.user === user.id);
    }
}