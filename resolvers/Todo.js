


export const Todo = {
    user : (todo,_,{db}) => {
        return db.users.find(user => user.id === todo.user);
    },
}