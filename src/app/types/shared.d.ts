import type { FC, PropsWithChildren } from "react";

declare global {
  namespace Shared {
    namespace UI {
      type Button = FC<
        PropsWithChildren<
          {
            size?: "sm" | "md" | "lg";
          } & React.ButtonElement
        >
      >;
    }
  }
}
