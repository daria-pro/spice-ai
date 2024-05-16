import Link from "next/link";
import React from "react";

interface Props {
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
}

const Button = ({
  href = "",
  children,
  className = "",
  size = "sm",
}: Props) => {
  const classes = `text-white border-gradient before:rounded-[91px] font-inter relative  ${
    size === "sm"
      ? "px-6 py-2.5 md:pb-4 md:pt-3.5 text-sm md:text-lg leading-[22px] font-normal"
      : "px-12 py-4 lg:py-6 font-medium"
  } ${className}`;

  const renderButton = () => (
    <button className={`${classes} button`}>
      <span className="text-transparent">{children}</span>
      <span
        className={`absolute inset-0  -translate-y-1/2 z-10 ${
          size === "sm" ? "top-1/2" : "top-[51%] lg:top-[54%]"
        }`}
      >
        {children}
      </span>
    </button>
  );

  const renderLink = () => (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );

  return <div className="">{href ? renderLink() : renderButton()}</div>;
};

export default Button;
