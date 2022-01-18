import "./App.css";
import Counter from "./Counter";
import useSelecting from "./hooks/useSelecting";
import TodoApp from "./TodoApp";

function App() {
  const [appToRender, counter, todoapp, setFalse] = useSelecting();

  console.log(appToRender);

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    setFalse();

    if (e.target.value === "Counter") return counter();
    if (e.target.value === "Todo") return todoapp();
  };

  return (
    <div className="layout">
      {appToRender.intro ? (
        <div className="layout">
          <label htmlFor="dropdown">
            Choose <strong>App to render</strong>
          </label>
          <select name="apps" id="dropdown" onChange={handleChange}>
            <option value="Select">Select option</option>
            <option value="Counter">Counter App</option>
            <option value="Todo">Todo App</option>
          </select>
        </div>
      ) : appToRender.counter ? (
        <Counter />
      ) : appToRender.todoapp ? (
        <TodoApp />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
