import { cn } from "@/lib/classes";

interface EdibleUILogoProps extends React.ComponentProps<"div"> {}

export function EdibleUILogo({ className, ...props }: EdibleUILogoProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-2 rounded-2xl shadow-xl",
        className
      )}
      {...props}
    >
      {/* Subtle inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />

      <svg
        data-slot="edible-svg"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <defs>
          {/* Gradient for apple depth */}
          <linearGradient
            id="appleGradientLarge"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
          </linearGradient>

          {/* Bite mark mask */}
          <mask id="appleBiteMaskLarge">
            <rect width="24" height="24" fill="white" />
            <circle cx="17.8" cy="8.2" r="2.5" fill="black" />
          </mask>
        </defs>

        {/* Apple body with bite */}
        <path
          d="M12 4C8.5 4 6 6.5 6 9.8c0 4.2 2.5 8.5 6 10.2 3.5-1.7 6-6 6-10.2C18 6.5 15.5 4 12 4z"
          fill="url(#appleGradientLarge)"
          mask="url(#appleBiteMaskLarge)"
        />
      </svg>
    </div>
  );
}
