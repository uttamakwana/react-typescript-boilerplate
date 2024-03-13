import { useState } from "react";

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(() => initialValue);

  function toggle(value?: boolean) {
    setValue((prevValue) => {
      return typeof value === "boolean" ? value : !prevValue;
    });
  }

  return [value, toggle];
}
