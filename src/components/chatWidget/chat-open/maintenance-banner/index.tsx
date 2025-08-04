import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";

type MaintenanceBannerProps = {
  customStyles?: CustomStyles;
};

export function MaintenanceBanner({ customStyles }: MaintenanceBannerProps) {
  return (
    <div
      className={mergeStyles(
        "bg-yellow-100 border-b border-yellow-200 p-3",
        customStyles,
        "maintenanceBanner"
      )}
    >
      <p
        className={mergeStyles(
          "text-yellow-800 text-sm text-center",
          customStyles,
          "maintenanceBannerText"
        )}
      >
        🔧 We're currently under maintenance. Chat is temporarily unavailable.
      </p>
    </div>
  );
}
