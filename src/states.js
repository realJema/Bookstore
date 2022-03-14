import { action, thunk } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

export default {
  todos: [],
  books: [],
  users: [],
  // Thunks
 
  // fetch book data and user data from two different api routes
  fetchData: thunk(async (actions) => {
    Promise.all([
      fetch(`http://localhost:5000/100pages/api/data/books`).then((books) => books.json()),
      fetch(`http://localhost:5000/100pages/api/data/users`).then((users) => users.json()),
    ])
      .then(([books, users]) => {
        
        // set value of both in results in state 
        actions.setBooks(books.data);
        actions.setUsers(users.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }),


  // Actions
  setBooks: action((state, books) => {
    state.books = books;
  }),
  setUsers: action((state, users) => {
    state.users = users;
  }),

  add: action((state, todo) => {
    todo.id = uuidv4();
    state.todos = [...state.todos, todo];
  }),
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
};
