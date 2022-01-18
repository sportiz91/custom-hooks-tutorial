import "./App.css";
import Counter from "./Counter";
import useSelecting from "./hooks/useSelecting";
import MouseApp from "./MouseApp";
import TodoApp from "./TodoApp";

/* 
  COMMON QUESTIONS ABOUT HOOKS:
  1. When I use a custom hook in one component and the same custom hook in another component... Does the components share state?
  NO! The state is independent. The case is similar as when we use useState in one component and useState in another component.
  2. When is it conveniente to return an array, an object or a single value?
  -> When there's only a single value -> single variable
  -> When the variables that we are importing in the component in probably that changes their original name, then an array is more convenient.
  We can do [bg, pos] -> and that would be ok. On the other hand, if I want to change the name with objects, I have to give them an alias
  {background: bg, position: pos}.
  -> If we wanted to import only one variable from a custom hook that depends on another custom hook, then objects are more comfty:
  {position} -> the order in which we import does not matter in the case of objects. If I wanted to do the same with an array I would
  have to do: [, position] -> because the original importting array was [background, position].. But.. Imagine we have an import with several
  variables, like [v1, v2, v3, v4, v5, background, position]. If I only wanted to import position I would have to do [, , , , , , position]
  Not very practical as you can see..... In those cases, an object is more useful.
*/

function App() {
  const [appToRender, counter, todoapp, mouseapp, setFalse] = useSelecting();

  console.log(appToRender);

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    setFalse();

    if (e.target.value === "Counter") return counter();
    if (e.target.value === "Todo") return todoapp();
    if (e.target.value === "Mouse") return mouseapp();
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
            <option value="Mouse">Mouse App</option>
          </select>
        </div>
      ) : appToRender.counter ? (
        <Counter />
      ) : appToRender.todoapp ? (
        <TodoApp />
      ) : appToRender.mouseapp ? (
        <MouseApp />
      ) : null}
    </div>
  );
}

export default App;
