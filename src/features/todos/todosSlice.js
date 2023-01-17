export function todosReducer(state = [], action) {
  if (action.type === "edit-todo") {
    return {
      ...state,
      todos: [
        {
          action,
        },
      ],
    };
  }
  return state;
}

export const initialTodos = [
  {
    id: Math.random(),
    text: "Learn JS",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "Learn CSS",
    isCompleted: false,
  },
  {
    id: Math.random(),
    text: "Learn HTML",
    isCompleted: false,
  },
];
