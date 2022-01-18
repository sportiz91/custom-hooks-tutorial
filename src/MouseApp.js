import React, { useMemo } from "react";
import useBackground from "./hooks/useBackground";

//handleMouseMove is created inside the useEffect. We could've created it outside the effect,
//but in this case it would become a dependecy of the effect. If it were a dependency,
//We would need useCallback().
//IMPORTANT: at this stage of the app, the component gets rendered everytime states changes. Say:
//Every time we move the mouse, the component gets re-rendered. In this case, because is a light process
//There's no problem. But, if we had a heavy process, then it would be recommended to use useMemo
const MouseApp = () => {
  const { background, position } = useBackground();

  return (
    <div className="override" style={{ background, height: "100vh" }}>
      <pre className="big-text">{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
};

export default MouseApp;
