import './styles.css';

// Si lo dejamos asi y no especificamos el nombre
// automaticamente (defecto) va a buscar el index.js
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

/*
todoList.todos.forEach( todo => crearTodoHtml( todo ) );

Quiere decir que el primer argumento del callback que estamos
teniendo en el forEach o en cualquier metodo esta llamando el
crear la funcion de dentro ( en este caso crearTodoHtml ) y el
argumento que se esta mandando dentro es el argumento que
regresa el forEach
Nota: Funciona bien si es solo 1 argumento
*/

todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );