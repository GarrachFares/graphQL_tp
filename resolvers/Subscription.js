export const Subscription = {
    newTodo : {
        subscribe(parent,args,{pubsub},info){
            return pubsub.asyncIterator('newTodo');
        }
    }
}