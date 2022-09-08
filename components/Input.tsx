import React, { useRef } from "react";
import useStore from "../store/authStore";

const Input = () => {
  const addPerson = useStore((state: any) => state.addPerson);
  const inputRef = useRef<any>(null);
  const addInput = () => {
    addPerson(inputRef?.current?.value);
    inputRef.current.value = null
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={addInput}>Add</button>
    </div>
  );
};

export default Input;
