import { Fragment, useEffect } from "react";

export default function KeySequenceListener({ sequence, action }) {
  useEffect(() => {
    const input = [];

    const listener = (event) => {
      input.push(event.code);
      if (input.length > sequence.length) {
        input.shift();
      }

      if (
        input.length === sequence.length &&
        input.every((value, i) => value === sequence[i])
      ) {
        action();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [sequence, action]);

  return <Fragment />;
}
