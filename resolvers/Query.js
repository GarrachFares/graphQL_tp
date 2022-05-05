

export const Query = {
    hello: (parent, args, context, info) => {
        console.log('parent : ', parent);
        console.log('context : ', context);
        console.log('info : ', info);
        console.log('args : ', args);
        return `Hello ${args.name || 'World'}`;
    },
    infos: () => {
        return {
            name: 'Sellaouti',
            firstname: 'Aymen'
        }
    },
    getAllStudents: (_ , args , {db}) => {
        return db.students;
    },
    getStudent: (_, {id},{db}) => {
        return db.students.find(
            (student) => student.id == id
        );
    },

    getAllTodos : (_,args,{db}) => {
        return db.todos;
    },

    getTodo : (_,{id},{db}) => {
        return db.todos.find((todo) => todo.id === id);
    },

    getUser : (_,{id},{db}) => {
        return db.users.find((user) => user.id === id);
    },

    getUsers: (_,args,{db}) => {
        return db.users;
    }

}
