declare namespace JSX {
  interface IntrinsicElements {
    "lord-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      trigger?: "hover" | "click" | "loop";
      colors?: string;
      style?: React.CSSProperties;
    };
  }
}
