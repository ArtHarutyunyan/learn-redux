import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { editName, selectName } from "./features/currentUser/currentUserSlice";

function App() {
  const name = useSelector(selectName);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch(editName(evt.target.value));
        }}
      />
    </div>
  );
}

export default App;
