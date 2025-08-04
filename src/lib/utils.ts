import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CustomStyles } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mergeStyles(
  defaultClasses: string,
  customStyles?: CustomStyles,
  styleKey?: keyof CustomStyles
): string {
  if (!customStyles || !styleKey || !customStyles[styleKey]) {
    return defaultClasses;
  }

  return cn(defaultClasses, customStyles[styleKey]);
}
