import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYesterdayDate = () => {
  const today = new Date();
  const yesterday = new Date(today);

  const milliseconds = yesterday.setDate(today.getDate() - 1);
  return new Date(milliseconds);
};
