import {v4 as uuidv4} from 'uuid';

export const Mutation = {
    addTodo: (parent, { addTodoInput }, { db,pubsub }, info) => {
        const user = db.users.find(user => user.id === addTodoInput.user);
        if(!user){
            throw new Error(`User wiht id ${addTodoInput.user} does not exist`);
        }
        const newTodo = {id: uuidv4(),...addTodoInput};
        db.todos.push(newTodo);
        pubsub.publish('newTodo',{newTodo:{operation:"Add",todo:newTodo}});
        return newTodo;
    },

    updateTodo: (parent,{id,updateTodoInput},{db,pubsub}) => {
        const index = db.todos.findIndex(todo => todo.id === id);
        if(index === -1){
            throw new Error(`Todo with id ${id} does not exist`)
        }
        if(updateTodoInput.user){
            const user = db.users.find(user => user.id === updateTodoInput.user);
            if(!user){
                throw new Error(`User wiht id ${addTodoInput.user} does not exist`);
            }
        }
        db.todos[index] = {...db.todos[index],...updateTodoInput};
        pubsub.publish('newTodo',{newTodo:{operation:"Update",todo:db.todos[index]}});
        return db.todos[index];

    },
    removeTodo : (parent,{id},{db,pubsub}) => {
        const index = db.todos.findIndex(todo => todo.id === id);
        if(index === -1){
            throw new Error(`Todo with id ${id} does not exist`);
        }
        pubsub.publish('newTodo',{newTodo:{operation:"Remove",todo:db.todos[index]}});
        db.todos.splice(index,1);
        
        return `Todo with id ${id} has been removed`;
    }
}