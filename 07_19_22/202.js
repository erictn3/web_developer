let input = prompt('what would you like to do?');

const todos = ['Collect Chicken Eggs', 'Clean litter box']

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('******')
    } else if (input === 'new') {
        const newTodo = prompt('Sure, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = prompt('Hrm, what index do you want to delete?');
        todos.splice(index, 1)
    }
    input = prompt('what would you like to do?')
}

console.log("okay, quitter");