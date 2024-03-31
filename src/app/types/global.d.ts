import type { DetailedHTMLProps, HTMLAttributes, Dispatch, SetStateAction } from "react";

declare global {
  namespace React {
    type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

    type Setter<T> = Dispatch<SetStateAction<T>>;
  }
}
