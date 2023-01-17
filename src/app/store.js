import { combineReducers, legacy_createStore as createStore } from "redux";
import {
  currentUserReducer,
  initialCurrentUser,
} from "../features/currentUser/currentUserSlice";
import { initialTodos, todosReducer } from "../features/todos/todosSlice";

const store = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer,
  }),
  {
    friends: [],
    posts: [],
    todos: initialTodos,
    currentUser: initialCurrentUser,
  }
);

export default store;
