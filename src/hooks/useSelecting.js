import { useState } from "react";

const useSelecting = () => {
  const [appToRender, setAppToRender] = useState({
    intro: true,
    counter: false,
    todoapp: false,
  });

  const counter = () => {
    setAppToRender({ ...appToRender, intro: false, counter: true });
  };

  const todoapp = () => {
    setAppToRender({ ...appToRender, intro: false, todoapp: true });
  };

  const setFalse = () => {
    setAppToRender({ intro: false, counter: false, todoapp: false });
  };

  return [appToRender, counter, todoapp, setFalse];
};

export default useSelecting;
