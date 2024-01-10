import { useRef } from "react";

export const FocusOnInput = () => {
  const ref = useRef();

  const handleButtonClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <input type="text" ref={ref} />

      <button onClick={handleButtonClick}>Set focus</button>
    </div>
  );
};
