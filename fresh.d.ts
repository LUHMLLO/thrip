import { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "x-sublayer": JSX.HTMLAttributes<HTMLElement>;
      "x-surlayer": JSX.HTMLAttributes<HTMLElement>;
      "x-grid": JSX.HTMLAttributes<HTMLElement>;
      "x-block": JSX.HTMLAttributes<HTMLElement>;
      "x-flex": JSX.HTMLAttributes<HTMLElement>;
      "x-row": JSX.HTMLAttributes<HTMLElement>;
      "x-wrap": JSX.HTMLAttributes<HTMLElement>;
      "x-col": JSX.HTMLAttributes<HTMLElement>;
      "x-column": JSX.HTMLAttributes<HTMLElement>;
      "x-group": JSX.HTMLAttributes<HTMLElement>;
      "x-stack": JSX.HTMLAttributes<HTMLElement>;
      "x-dropdown": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
