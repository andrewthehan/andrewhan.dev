import React, { KeyboardEvent, useEffect } from "react";

type Props = {
  sequence: string[];
  action: () => void;
};

export default function KeySequenceListener({ sequence, action }: Props) {
  useEffect(() => {
    const input: string[] = [];

    const listener = (event: KeyboardEvent) => {
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

    document.addEventListener("keydown", listener as any);

    return () => {
      document.removeEventListener("keydown", listener as any);
    };
  }, [sequence, action]);

  return <></>;
}
