import { useMemo } from "react";
import useMousePosition from "./useMousePosition";

//As you can see, a custom hook can call another custom hook.
const useBackground = () => {
  const position = useMousePosition();

  //This ensures that the calculation is executed every time the mouse position is changed.
  //If instead of [position] we determined [] (empty dependencies), the calculation would be calculated
  //The first time the function get's executed and nevermore!
  //In this case, useMemo is not neccesary, because without using it, everytime the mouse moved the component re-rendered
  //And calculation done again. With useMemo we only do the recalculation every time the mouse is moved, which is the same!
  const background = useMemo(
    () => (position.x < window.innerWidth / 2 ? "blue" : "red"),
    [position]
  );

  return { background, position };
};

export default useBackground;
