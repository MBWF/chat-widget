import type { ButtonPosition } from "@/types";

export const getButtonPositionClasses = (
  buttonPosition: ButtonPosition = "bottom-right"
): string => {
  const baseClasses = "fixed z-50";

  switch (buttonPosition) {
    case "bottom-right":
      return `${baseClasses} bottom-4 right-4`;
    case "bottom-center":
      return `${baseClasses} bottom-4 left-1/2 transform -translate-x-1/2`;
    case "bottom-left":
      return `${baseClasses} bottom-4 left-4`;
    case "top-right":
      return `${baseClasses} top-4 right-4`;
    case "top-center":
      return `${baseClasses} top-4 left-1/2 transform -translate-x-1/2`;
    case "top-left":
      return `${baseClasses} top-4 left-4`;
    default:
      return `${baseClasses} bottom-4 right-4`;
  }
};

export const getChatWindowPositionClasses = (
  buttonPosition: ButtonPosition = "bottom-right"
): string => {
  const baseClasses =
    "fixed bg-white w-80 h-96 rounded-lg shadow-2xl flex flex-col overflow-hidden sm:w-[450px] sm:h-[620px] z-40";

  switch (buttonPosition) {
    case "bottom-right":
      return `${baseClasses} bottom-20 right-4`;
    case "bottom-center":
      return `${baseClasses} bottom-20 left-1/2 transform -translate-x-1/2`;
    case "bottom-left":
      return `${baseClasses} bottom-20 left-4`;
    case "top-right":
      return `${baseClasses} top-20 right-4`;
    case "top-center":
      return `${baseClasses} top-20 left-1/2 transform -translate-x-1/2`;
    case "top-left":
      return `${baseClasses} top-20 left-4`;
    default:
      return `${baseClasses} bottom-20 right-4`;
  }
};

export const getLayoutClasses = (): string => {
  return "flex flex-col gap-2";
};
