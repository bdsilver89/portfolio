import React from "react";

import { cn } from "@lib/utils";

const DEFAULT_TAG = "p" as const;

const styles = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  p: "text-base",
};

export type TextProps = {
  as: keyof typeof styles;
  className?: string;
  children: React.ReactNode;
};

export default function Text(props: TextProps) {
  const { as: El = DEFAULT_TAG, className, ...rest } = props;

  let style = "";
  if (styles[El]) {
    style = styles[El];
  }

  return <El className={cn(className, style)} {...rest} />;
}
