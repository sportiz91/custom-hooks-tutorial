//Remember: we don't import React because we are not using JSX here.
import { useState, useEffect } from "react";

const initialPosition = {
  x: null,
  y: null,
};

const useMousePosition = () => {
  const [position, setPosition] = useState(initialPosition);

  //Everytime we add an eventListener to an useEffect, we need to remove on component onmount.
  //Because this event in on a custom hook, the component will unmount when the component that uses
  //the hooks gets unmounted.
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position; //In this case, because we have an only variable to return, it doesn't make sense to return an array
  //You can return a single value, an array and even objects.
};

export default useMousePosition;
