
export function Logo({
    background = "dark",
    className = "",
    ...props
  }: {
    background?: "light" | "dark";
    className?: string;
  }) {
    return (
      <div
        style={{ width: "160px", height: "15px" }}
        className={className}
        {...props}
      >
        {background === "dark" ? (
          <img
            src="/logo.svg"
            alt="Samurai logo"
            width="160"
            height="15"
            className="saturate-0"
          />
        ) : (
          <img
            src="/logo.svg"
            alt="Samurai logo"
            width="160"
            height="15"
          />
        )}
      </div>
    );
  }
  