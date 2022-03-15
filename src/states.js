import { action, thunk } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

export default {
  todos: [],
  books: [],
  users: [],
  categories: [],
  settings: {
    display: "grid", 
  
  },
  // Thunks
 
  // fetch book data and user data from two different api routes
  fetchData: thunk(async (actions) => {
    Promise.all([
      fetch(`http://localhost:5000/100pages/api/data/books`).then((books) => books.json()),
      fetch(`http://localhost:5000/100pages/api/data/users`).then((users) => users.json()),
      fetch(`http://localhost:5000/100pages/api/data/categories`).then((categories) => categories.json()),
    ])
      .then(([books, users, categories]) => {

        // set value of both in results in state 
        actions.setBooks(books.data);
        actions.setUsers(users.data);
        actions.setCategories(categories.data);
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
  setCategories: action((state, categories) => {
    state.categories = categories;
  }),

  add: action((state, todo) => {
    todo.id = uuidv4();
    state.todos = [...state.todos, todo];
  }),
  toggleDisplay: action((state) => {
      if (state.settings.display === "grid") {
        state.settings.display = "list";
      }
      else {
        state.settings.display = "grid"; 
      }
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
};
