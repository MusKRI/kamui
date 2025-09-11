import { cn } from "@/lib/classes";

interface PureUILogoProps extends React.ComponentProps<"div"> {}

export function PureUILogo({ className, ...props }: PureUILogoProps) {
  return (
    <div
      className={cn(
        "relative bg-[#161616] dark:bg-[#f7f7f7] p-2 rounded-xl overflow-hidden shadow-2xl",
        className
      )}
      {...props}
    >
      <svg
        data-slot="pure-ui-svg"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#f7f7f7] dark:text-[#161616]"
      >
        <path
          d="M6.575 17.6L17.6 6.575M5 11.3L11.3 5M12.7 19L19 12.7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        ></path>
      </svg>
    </div>
  );
}
