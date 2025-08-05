import type { ChatPosition } from "@/types";

export const getLayoutClasses = (position: ChatPosition): string => {
  switch (position) {
    case "top":
      return "flex flex-col-reverse gap-2";
    case "left":
      return "flex flex-row-reverse gap-2 items-end";
    case "right":
      return "flex flex-row gap-2 items-end";
    case "bottom":
    default:
      return "flex flex-col gap-2";
  }
};

export const getPositionClasses = (
  position: ChatPosition = "bottom"
): string => {
  const baseClasses =
    "bg-white w-80 h-96 rounded-lg shadow-2xl flex flex-col overflow-hidden sm:w-[450px] sm:h-[620px]";

  switch (position) {
    case "top":
      return `${baseClasses} mt-4`;
    case "left":
      return `${baseClasses} mr-4`;
    case "right":
      return `${baseClasses} ml-4`;
    case "bottom":
    default:
      return `${baseClasses} mb-4`;
  }
};
