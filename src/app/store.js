import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import {
  currentUserReducer,
  initialCurrentUser,
} from "../features/currentUser/currentUserSlice";
import {
  friendsReducer,
  initialFriends,
} from "../features/friends/friendsSlice";
import { initialPosts, postsReducer } from "../features/posts/postsSlice";
import { initialTodos, todosReducer } from "../features/todos/todosSlice";

const store = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todos: todosReducer,
    posts: postsReducer,
    friends: friendsReducer,
  }),
  {
    friends: initialFriends,
    posts: initialPosts,
    todos: initialTodos,
    currentUser: initialCurrentUser,
  },
  applyMiddleware(thunk)
  // applyMiddleware(logger, logger2)
);

export default store;

// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log("yay");
//       action.payload.name += "y";
//       setTimeout(() => {
//         next(action);
//       }, 2000);
//     };
//   };
// }

// const logger2 = (store) => (next) => (action) => {
//   console.log("ok");
//   action.payload.name += "an";
//   next(action);
// };
