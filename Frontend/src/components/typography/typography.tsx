export interface TypographyProps extends React.PropsWithChildren {
  type?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  type = "p",
  className = "",
  children,
}) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-foreground ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`scroll-m-20 text-2xl font-semibold tracking-tight text-foreground ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`scroll-m-20 text-xl font-semibold tracking-tight text-foreground ${className}`}
        >
          {children}
        </h4>
      );
    default:
      return (
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 text-foreground ${className}`}
        >
          {children}
        </p>
      );
  }
};
