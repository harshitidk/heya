import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const isProd = process.env.NODE_ENV === 'production';
export const BASE_PATH = "";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
