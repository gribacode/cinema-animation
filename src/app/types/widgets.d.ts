import type { FC } from "react";

declare global {
  namespace Widgets {
    namespace Model {
      type Image = {
        url: string;
        title: string;
      };
    }
  }
}
